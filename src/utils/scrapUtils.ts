// scrapUtils.ts
import {SetterOrUpdater} from 'recoil';

export const toggleScrap = (
  setScrapList: SetterOrUpdater<NewsType[]>,
  newsItem: NewsType,
) => {
  setScrapList(prevScrapList => {
    const isAlreadyScrapped = prevScrapList.some(
      item => item._id === newsItem._id,
    );
    if (isAlreadyScrapped) {
      // Remove from scrap list
      return prevScrapList.filter(item => item._id !== newsItem._id);
    } else {
      // Add to scrap list
      return [...prevScrapList, newsItem];
    }
  });
};
