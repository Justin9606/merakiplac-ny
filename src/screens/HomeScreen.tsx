import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRecoilState} from 'recoil';
//components
import {FilterModal, NewsList} from 'components/common';
import {CustomHeader} from 'components/header';
import API from 'api';
import {formatDateWithDay} from 'utils/utility';
import {toggleScrap} from 'utils/scrapUtils';
import {scrapListAtom} from 'atoms/scrapListAtom';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<NewsType[]>([]);
  const [scrapList, setScrapList] = useRecoilState(scrapListAtom);

  const dataFetch = async () => {
    setLoading(true);
    try {
      const response = await API.get('/search/v2/articlesearch.json', {
        params: {
          page: page,
        },
      });
      if (page === 0) {
        setData(response.data.response.docs);
      } else {
        setData(prevData => [...prevData, ...response.data.response.docs]);
      }
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetch();
  }, [page]);

  const handleToggleScrap = (newsItems: NewsType) => {
    toggleScrap(setScrapList, newsItems);
  };

  const navigation = useNavigation();
  return (
    <>
      <CustomHeader
        headerType="custom"
        onPressHeaderFilter={() => setModalVisible(true)}
      />

      <FlatList
        onEndReached={() => {
          if (!loading) {
            setPage(prevPage => prevPage + 1);
            dataFetch();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
        ListHeaderComponent={
          <FilterModal
            isVisible={modalVisible}
            onApplyFilter={() => {
              setModalVisible(false);
            }}
          />
        }
        data={data}
        renderItem={({item, index}) => {
          const isScrapped = scrapList.includes(item);
          return (
            <NewsList
              _id={item._id}
              key={index + item._id}
              index={index}
              onPress={() =>
                navigation.navigate('WebViewScreen', {
                  WebViewUrl: item.web_url,
                  title: item.headline.main,
                  originWhitelist: ['*'],
                })
              }
              onPressScrapBtn={() => handleToggleScrap(item)}
              headLine={item?.headline.main}
              isScrapped={isScrapped}
              newsDate={formatDateWithDay(item.pub_date)}
              reportedSource={item.source}
              reportedBy={item?.byline.original}
            />
          );
        }}
      />
    </>
  );
};

export default HomeScreen;
