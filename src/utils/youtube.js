const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

export function youtubeId(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try {
    const url = new URL(raw);
    const host = url.hostname.replace(/^www\./, "");
    let id = "";
    if (host === "youtu.be") {
      id = url.pathname.split("/").filter(Boolean)[0] || "";
    } else if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      id = url.searchParams.get("v") || "";
      if (!id) {
        const parts = url.pathname.split("/").filter(Boolean);
        if (["embed", "shorts", "live", "v"].includes(parts[0])) id = parts[1] || "";
      }
    }
    return YOUTUBE_ID.test(id) ? id : "";
  } catch {
    return "";
  }
}
