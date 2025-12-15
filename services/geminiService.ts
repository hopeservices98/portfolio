export const sendMessageToGemini = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ history, newMessage }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData.error);
      return errorData.error || "Connection interrupted. My neural link is experiencing static.";
    }

    const data = await response.json();
    return data.response || "I'm processing that... (No text returned)";
  } catch (error) {
    console.error("Network Error:", error);
    return "Connection interrupted. My neural link is experiencing static.";
  }
};