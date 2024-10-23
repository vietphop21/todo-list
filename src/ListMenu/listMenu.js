import React, { useState } from "react";
import { Grid } from "@mui/material";

const services = [
  { value: "all", text: "Tất cả" },
  { value: "gdtg_mmo_tg", text: "GDTG MMO TG" },
  { value: "youtube", text: "Youtube" },
  { value: "dv_wechat", text: "Dv.Wechat" },
  { value: "dv_google", text: "Dv.Google" },
  { value: "dv_tiktok", text: "Dv.Tiktok" },
  { value: "dv_telegram", text: "Dv.Telegram" },
  { value: "dv_youtube", text: "Dv.Youtube" },
  { value: "dv_facebook", text: "Dv.Facebook" },
  { value: "nguyen_lieu_airdrop", text: "Nguyên liệu Airdrop" },
  { value: "dv_game_free_fire", text: "Dv.Game Free Fire" },
  { value: "dv_game_lien_quan", text: "Dv.Game Liên Quân" },
  { value: "dv_game_nro", text: "Dv.Game Nro" },
  { value: "dv_game_fifa_online_4", text: "Dv.Game FIFA Online 4" },
  { value: "dv_game_pubg_mobile", text: "Dv.Game Pubg Mobile" },
  { value: "dv_game_dot_kich", text: "Dv.Game Đột Kích" },
  { value: "game_roblox", text: "Game Roblox" },
  { value: "game_pass", text: "Game Pass" },
  { value: "dv_game_playtogether", text: "Dv.Game Playtogether" },
  {
    value: "dv_game_lien_minh_huyen_thoai",
    text: "Dv.Game Liên Minh Huyền Thoại",
  },
  { value: "dv_game_pes_mobile", text: "Dv.Game Pes Mobile" },
  { value: "dv_cay_thue_game", text: "Dv.Cày thuê Game" },
  { value: "dv_paypal_payoner", text: "Dv.Paypal, payoner..." },
  { value: "mua_ban_tien_dien_tu", text: "Mua bán tiền điện tử" },
  { value: "rut_vi_tra_sau", text: "Rút ví trả sau" },
  { value: "thiet_ke_code_web", text: "Thiết kế, Code web" },
  { value: "hosting_vps_domain", text: "Hosting, vps, domain" },
  { value: "tai_khoan_proxy", text: "Tài khoản Proxy" },
  { value: "mua_the_gach_the", text: "Mua thẻ, gạch thẻ" },
  { value: "thanh_toan_cuoc_vocher", text: "Thanh toán cước, vocher" },
  {
    value: "tk_netflix_youtube_spotify",
    text: "Tk Netflix, YouTube, Spotify…",
  },
  { value: "fanpage_group", text: "Fanpage, group" },
  { value: "nap_game", text: "Nạp game" },
  {
    value: "the_playerduo_code_steam_tinder",
    text: "Thẻ playerduo, code steam, tinder..",
  },
  { value: "chuyen_tien_quoc_te", text: "Chuyển tiền quốc tế" },
  { value: "landing_page", text: "Landing page" },
  { value: "tai_khoan_sim_so_dep", text: "Tài khoản, sim số đẹp" },
  { value: "reg_domain", text: "Reg domain" },
  { value: "book_bao", text: "Book báo" },
];

const ListMenu = () => {
  const [activeService, setActiveService] = useState("all");
  const handleServiceClick = (serviceValue) => {
    setActiveService(serviceValue);
  };

  return (
    <div>
      <Grid
        container
        px={2}
        gap="4px"
        justifyContent={"center"}
        alignItems={"center"}
      >
        {services.map((service, index) => (
          <Grid item xs={3.5} sm={1.5} key={service.value}>
            <div
              onClick={() => handleServiceClick(service.value)}
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                borderRadius: "20px",
                width: "100%",
                textAlign: "center",
                backgroundColor:
                  activeService === service.value ? "black" : "white",
                color: activeService === service.value ? "white" : "black",
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              <p style={{ margin: 0 }}>{service.text}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ListMenu;
