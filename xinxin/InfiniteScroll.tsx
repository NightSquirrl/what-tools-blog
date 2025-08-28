import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// 模拟数据项
const generateItems = (start, count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: start + i,
    title: `项目 ${start + i + 1}`,
    content: `这是第 ${start + i + 1} 个项目的内容描述，包含一些示例文本...`,
    image: `https://picsum.photos/300/200?random=${start + i}`,
  }));
};

// 模拟 API 请求
const fetchData = (page, pageSize = 10) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = page * pageSize;
      const items = generateItems(start, pageSize);
      resolve({
        items,
        hasMore: page < 4, // 模拟总共5页数据
      });
    }, 1000); // 模拟网络延迟
  });
};

const InfiniteScrollDemo = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // 初始加载数据
  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const result = await fetchData(0);
      setItems(result.items);
      setHasMore(result.hasMore);
      setPage(1);
    } catch (error) {
      console.error("加载初始数据失败:", error);
    }
  };

  // 加载更多数据
  const fetchMoreData = useCallback(async () => {
    try {
      console.log("加载更多数据...");

      const result = await fetchData(page);
      setItems((prevItems) => [...prevItems, ...result.items]);
      setHasMore(result.hasMore);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("加载更多数据失败:", error);
    }
  }, [page]);

  // 刷新数据
  const handleRefresh = useCallback(async () => {
    console.log("刷新数据...");

    setIsRefreshing(true);
    try {
      const result = await fetchData(0);
      setItems(result.items);
      setHasMore(result.hasMore);
      setPage(1);
    } catch (error) {
      console.error("刷新数据失败:", error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  const handleScroll = useCallback((e) => {
    console.log("滚动位置:", e.target.scrollTop);
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        React Infinite Scroll 示例
      </h1>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <p style={{ color: "#666", fontSize: "14px" }}>
          当前已加载 {items.length} 个项目
          {hasMore ? "，向下滚动加载更多" : "，已加载全部数据"}
        </p>
      </div>

      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              fontSize: "14px",
              color: "#1890ff",
            }}
          >
            <span>🔄 正在加载更多...</span>
          </div>
        }
        endMessage={
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              fontSize: "14px",
              color: "#999",
              borderTop: "1px solid #f0f0f0",
              marginTop: "20px",
            }}
          >
            <span>🎉 已经到底了，没有更多内容了！</span>
          </div>
        }

        
        refreshFunction={handleRefresh}
        pullDownToRefresh={true}
        pullDownToRefreshContent={
          <div
            style={{ textAlign: "center", padding: "10px", color: "#1890ff" }}
          >
            <span>⬇️ 下拉刷新</span>
          </div>
        }
        releaseToRefreshContent={
          <div
            style={{ textAlign: "center", padding: "10px", color: "#52c41a" }}
          >
            <span>⬆️ 释放立即刷新</span>
          </div>
        }
        pullDownToRefreshThreshold={100} // 可选，默认100
        height={500}
        onScroll={handleScroll}
        style={{
          border: "1px solid #e8e8e8",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "16px",
                borderBottom: "1px solid #f0f0f0",
                display: "flex",
                gap: "16px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "4px",
                  backgroundColor: "#f5f5f5",
                }}
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik00MCAzNUM0My4zMTM3IDM1IDQ2IDMyLjMxMzcgNDYgMjlDNDYgMjUuNjg2MyA0My4zMTM3IDIzIDQwIDIzQzM2LjY4NjMgMjMgMzQgMjUuNjg2MyAzNCAyOUMzNCAzMi4zMTM3IDM2LjY4NjMgMzUgNDAgMzVaIiBmaWxsPSIjRDlEOUQ5Ii8+CjxwYXRoIGQ9Ik0zMiA0MUg0OFY0M0gzMlY0MVoiIGZpbGw9IiNEOUQ5RDkiLz4KPC9zdmc+";
                }}
              />
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    margin: "0 0 8px 0",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>

      {isRefreshing && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "4px",
            zIndex: 1000,
          }}
        >
          刷新中...
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollDemo;
