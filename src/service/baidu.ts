import { request } from "./request";
export interface BaiduHotSearchResult {
  cards: Card[];
  curBoardName: string;
  logid: string;
  platform: string;
  tabBoard: TabBoard[];
  tag: Tag[];
}

interface Tag {
  typeName: string;
  text: string;
  content: string[];
  curIndex: number;
}

interface TabBoard {
  index: number;
  text: string;
  typeName: string;
}

interface Card {
  component: string;
  content: BaiduHotSearchContent[];
  more: number;
  moreAppUrl: string;
  moreUrl: string;
  text: string;
  topContent: TopContent[];
  typeName: string;
  updateTime: string;
}

interface TopContent {
  appUrl: string;
  desc: string;
  hotChange: string;
  hotScore: string;
  hotTag: string;
  img: string;
  index: number;
  indexUrl: string;
  query: string;
  rawUrl: string;
  show: unknown;
  url: string;
  word: string;
}

export interface BaiduHotSearchContent {
  appUrl: string;
  desc: string;
  hotChange: string;
  hotScore: string;
  hotTag: string;
  img: string;
  index: number;
  indexUrl: string;
  query: string;
  rawUrl: string;
  show: unknown;
  url: string;
  word: string;
  isTop?: boolean;
  hotTagImg?: string;
}

function extractDataFromDOM(domString: string): BaiduHotSearchResult | null {
  const div = document.createElement('div');
  div.innerHTML = domString;

  const targetDiv = div.querySelector('#sanRoot');
  if (!targetDiv) {
    return null;
  }

  const regex = /<!--s-data:(.*?)-->/g;
  const matches = targetDiv.innerHTML.match(regex);
  const data = []
  if (matches) {
    for (const match of matches) {
      const extractedData = match.substring(11, match.length - 3);
      data.push(extractedData);
    }
  }

  return JSON.parse(data[0]).data as BaiduHotSearchResult
}

export async function getBaiduHotSearch() {
  return (await request('https://top.baidu.com/board?tab=realtime')).text().then((data) => {
    return {
      time: Date.now(),
      data: extractDataFromDOM(data)
    }
  })
}