import { useState } from "react";

export function useBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (query: string) => {
        setLoading(true);

        try {
            const response = await fetch(`https://openapi.naver.com/v1/search/blog.json?query=${query}&display=10`, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": "j3am1DhWIHUZhpC9M_PI",
                    "X-Naver-Client-Secret": "ztK2t6FmAC",
                },
            });
            const data = await response.json();

            console.log(" ========== 네이버 블로그 API 호출 ========== ");
            console.log(data.items);

            if (data) setBlogs(data.items);
        } catch (error) {
            console.log(error);
            throw new Error(`NAVER SEARCH LOCATION API ERROR: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return { blogs, loading, fetchData };
}
