// Delivers the contact form through Web3Forms (https://web3forms.com), which emails the message to the
// address the access key was created for. The key is meant to be public, so it is inlined at build time.
const ENDPOINT = "https://api.web3forms.com/submit";

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  subject: string;
  fromName: string;
}

// Resolves to true only when Web3Forms confirms the message was sent.
export async function sendMessage({ name, email, message, subject, fromName }: ContactMessage) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set, so the message was not sent.");
    return false;
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: accessKey, name, email, message, subject, from_name: fromName }),
    });
    const result = (await response.json()) as { success?: boolean };
    return response.ok && result.success === true;
  } catch {
    return false;
  }
}
