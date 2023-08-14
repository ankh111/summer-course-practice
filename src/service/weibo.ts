import { request } from "./request";

export interface WeboHotSearchResult {
  ok: number;
  data: Data;
}

interface Data {
  realtime: Realtime[];
  hotgovs: Hotgov[];
  hotgov: Hotgov;
}

interface Hotgov {
  is_gov: number;
  mid: string;
  flag: number;
  url: string;
  topic_flag: number;
  icon_desc: string;
  small_icon_desc: string;
  icon_desc_color: string;
  name: string;
  word: string;
  small_icon_desc_color: string;
  note: string;
  is_hot: number;
  pos: number;
}

export interface Realtime {
  is_new?: number;
  star_word?: number;
  fun_word?: number;
  flag?: number;
  mid?: string;
  topic_flag: number;
  word: string;
  onboard_time?: number;
  small_icon_desc?: string;
  star_name: string[] | Starname2;
  ad_info?: string;
  raw_hot?: number;
  num: number;
  realpos?: number;
  extension?: number;
  note: string;
  subject_querys?: string;
  expand?: number;
  icon_desc?: string;
  category?: string;
  icon_desc_color?: string;
  label_name?: string;
  word_scheme?: string;
  small_icon_desc_color?: string;
  channel_type?: string;
  emoticon: string;
  subject_label?: string;
  rank: number;
  flag_desc?: string;
  is_fei?: number;
  is_hot?: number;
  is_topic?: number;
  logo?: string;
  mobile_icon?: Mobileicon;
  name?: string;
  start_time?: number;
  end_time?: number;
  sort?: number;
  dot_icon?: number;
  icon_type?: string;
  nickname_show?: number;
  forbidden?: Starname2;
  icon?: string;
  icon_width?: number;
  icon_height?: number;
  id?: number;
  monitors?: Monitors;
  jump_scheme?: string;
  poi?: number;
  is_ad?: number;
  mobile_icon_socialize?: Mobileiconsocialize;
  updated_time?: string;
  monitor?: Starname2;
  is_star?: number;
  socialize_icon_width?: number;
  pc_icon?: Pcicon;
  topic_ad?: number;
  ad_type?: string;
  ad_channel?: number;
  is_abtest?: number;
  is_warm?: number;
}

interface Pcicon {
  finder_desc: string;
  band_desc_color: string;
  band_desc: string;
  finder_desc_color: string;
}

interface Mobileiconsocialize {
  finder_grey: string;
  finder: string;
  band: string;
  band_grey: string;
  width: number;
  heigth: number;
}

interface Monitors {
  app: App[];
  pc: Starname2;
}

interface App {
  third_party_click: string;
  monitor_name: string;
  third_party_show: string;
  type: string;
}

interface Mobileicon {
  width: number;
  finder: string;
  band: string;
  band_grey: string;
  finder_grey: string;
  height: number;
}

interface Starname2 {
}

export async function getWeboHotSearch(): Promise<WeboHotSearchResult> {
  return (await request('https://weibo.com/ajax/side/hotSearch')).json();
}