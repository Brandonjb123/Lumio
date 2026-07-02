import { useState } from 'react';
import api from '../lib/api';

export default function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('blog');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError('');
    setResult('');
    try {
      const res = await api.post('/content/generate', { prompt, content_type: contentType });
      setResult(res.data.result);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Gagal generate konten');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Generate Konten AI</h1>
        <p className="text-gray-500 mt-1">Buat konten blog, caption, atau email dengan bantuan AI.</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipe Konten</label>
          <div className="flex gap-2">
            {[
              { value: 'blog', label: '📝 Blog' },
              { value: 'caption', label: '📸 Caption' },
              { value: 'email', label: '📧 Email' },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => setContentType(type.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  contentType === type.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Tulis prompt kamu di sini..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            rows={5}
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading || !prompt.trim()}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '⏳ Generating...' : '✨ Generate'}
        </button>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>}
      </div>

      {/* Hasil */}
      {result && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Hasil Generate</h2>
          <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">{result}</div>
        </div>
      )}
    </div>
  );
}