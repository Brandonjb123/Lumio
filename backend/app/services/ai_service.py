from openai import OpenAI
from app.config import settings

client = OpenAI(
    api_key=settings.groq_api_key,
    base_url="https://api.groq.com/openai/v1"
)

def generate_content(prompt: str, content_type: str = "blog") -> str:
    """Generate konten menggunakan Groq LLM."""
    system_prompts = {
        "blog" : "Kamu adalah penulis blog profesional. Tulis artikel yang informatif dan engaging dalam Bahasa Indonesia.",
        "caption": "Kamu adalah social media expert. Tulis caption Instagram yang catchy dan menarik dalam Bahasa Indonesia.",
        "email" : "Kamu adalah email marketer profesiona. Tulis email marketing yang persuasif dalam Bahasa Indonesia."
    }

    system_prompts = system_prompts.get(content_type, system_prompts["blog"])

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": system_prompts},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=500
    )

    return response.choices[0].message.content