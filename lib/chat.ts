import { z } from "zod";

export const chatRequestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(1_000),
      }),
    )
    .min(1)
    .max(10),
});

export const productKnowledge = `
VisionAI is a concept AI smart-glasses product focused on lightweight, hands-free spatial computing.
Confirmed specifications: 42g weight, up to 18 hours battery life, Micro OLED display, 12MP ultra-wide camera, open-ear spatial audio, Wi-Fi 6, Bluetooth 5.3, VisionAI Neural Core chipset, and USB-C fast charging.
Confirmed features: real-time translation in over 100 languages, AI voice assistance, turn-by-turn AR navigation, hands-free photo and video capture, contextual AI search, and intelligent power management.
Pricing, release date, shipping regions, warranty, prescription-lens support, water resistance, and final retail availability have not been announced. Invite interested visitors to join the newsletter for updates.
Contact: lecongthinh24062002@gmail.com or 0379 711 416.
`;

export function getFallbackReply(question: string) {
  const normalized = question.toLocaleLowerCase();
  const isVietnamese = /[ăâđêôơưáàảãạ]/i.test(normalized) || /\b(pin|giá|nặng|camera|mua|dịch|liên hệ)\b/i.test(normalized);

  if (/battery|pin|charge|sạc/.test(normalized)) {
    return isVietnamese
      ? "VisionAI có thời lượng pin lên đến 18 giờ và hỗ trợ sạc nhanh USB-C."
      : "VisionAI offers up to 18 hours of battery life with USB-C fast charging.";
  }
  if (/weight|nặng|comfort|thoải mái/.test(normalized)) {
    return isVietnamese
      ? "Kính nặng 42g, được thiết kế để đeo nhẹ và thoải mái trong thời gian dài."
      : "The glasses weigh 42g and are designed for lightweight, all-day comfort.";
  }
  if (/camera|photo|video|ảnh/.test(normalized)) {
    return isVietnamese
      ? "VisionAI sử dụng camera góc siêu rộng 12MP để chụp ảnh và video rảnh tay."
      : "VisionAI uses a 12MP ultra-wide camera for hands-free photo and video capture.";
  }
  if (/translation|language|dịch|ngôn ngữ/.test(normalized)) {
    return isVietnamese
      ? "Tính năng dịch thời gian thực hỗ trợ hơn 100 ngôn ngữ và hiển thị trực tiếp qua kính."
      : "Real-time translation supports more than 100 languages directly through the lenses.";
  }
  if (/price|pricing|cost|giá|buy|mua|release|ra mắt/.test(normalized)) {
    return isVietnamese
      ? "Giá bán và ngày phát hành chưa được công bố. Bạn có thể đăng ký newsletter để nhận thông tin sớm nhất."
      : "Pricing and the release date have not been announced. Join the newsletter for early updates.";
  }
  if (/contact|email|phone|liên hệ|điện thoại/.test(normalized)) {
    return "You can contact Le Cong Thinh at lecongthinh24062002@gmail.com or 0379 711 416.";
  }

  return isVietnamese
    ? "Mình có thể tư vấn về tính năng, thông số, pin, camera và khả năng dịch thuật của VisionAI. Bạn muốn tìm hiểu phần nào?"
    : "I can help with VisionAI features, specifications, battery, camera, and translation. What would you like to explore?";
}
