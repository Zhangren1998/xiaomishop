import {
  get
} from "@/utils/request";

export const loadBanners = () => get("/api/v1/banners");
