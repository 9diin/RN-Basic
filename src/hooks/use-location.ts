import { useState } from "react";

export function useLocation() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (query: string) => {
        setLoading(true);

        try {
            const response = await fetch(`https://openapi.naver.com/v1/search/local.json?query=${query}&display=5&start=1&sort=random`, {
                method: "GET",
                headers: {
                    "X-Naver-Client-Id": process.env.EXPO_PUBLIC_NAVER_CLINET_ID as string,
                    "X-Naver-Client-Secret": process.env.EXPO_PUBLIC_NAVER_CLIENT_SECRET as string,
                },
            });
            const data = await response.json();

            console.log(data.items);

            if (data) setData(data.items);
        } catch (error) {
            console.log(error);
            throw new Error(`NAVER SEARCH LOCATION API ERROR: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, fetchData };
}
