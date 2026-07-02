import { useState, useEffect } from 'react';
import api from '../lib/api';

interface ContentItem {
  id: number;
  content_type: string;
  prompt: string;
  result: string;
  created_at: string;
}

export default function History() {
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [error, setError] = useState('');

  const fetchHistory = async () => {
    try {
      const res = await api.get('/content/history');
      setContents(res.data);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Gagal memuat history');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin hapus konten ini?')) return;
    try {
      await api.delete(`/content/delete/${id}`);
      setContents(contents.filter((item) => item.id !== id));
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Gagal menghapus');
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const typeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'caption': return '📸';
      case 'email': return '📧';
      default: return '📄';
    }
  };

  if (loading) return <div className="text-center py-12 text-gray-500">⏳ Memuat history...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">History Konten</h1>
        <p className="text-gray-500 mt-1">Daftar konten yang pernah kamu generate.</p>
      </div>

      {contents.length === 0 ? (
        <div className="text-center py-12 text-gray-400">Belum ada konten. Yuk generate dulu!</div>
      ) : (
        <div className="space-y-3">
          {contents.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 transition">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0 cursor-pointer" onClick={() => toggleExpand(item.id)}>
                  <div className="flex items-center gap-2 mb-1">
                    <span>{typeIcon(item.content_type)}</span>
                    <span className="text-xs font-medium text-gray-500 uppercase">{item.content_type}</span>
                    <span className="text-xs text-gray-400">• {new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <p className="text-sm text-gray-700 truncate">{item.prompt}</p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-400 hover:text-red-600 transition shrink-0 text-sm"
                >
                  🗑️
                </button>
              </div>
              {expandedId === item.id && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="prose max-w-none text-gray-600 text-sm whitespace-pre-wrap">{item.result}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}