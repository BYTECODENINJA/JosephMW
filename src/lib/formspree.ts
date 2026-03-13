export const FORMSPREE = {
    CONTACT_URL: " https://formspree.io/f/mreyknvb",
    HIRE_URL:    "https://formspree.io/f/mdawzqvz",     // ← replace
};

export async function submitToFormspree(
    url: string,
    data: Record<string, string>
): Promise<void> {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        const msg = (json as { error?: string }).error ?? `HTTP ${res.status}`;
        throw new Error(msg);
    }
}
