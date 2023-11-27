import axios, { AxiosError, AxiosResponse } from 'axios';

interface MyConfig<D = any> {
  method?: 'post' | 'put' | 'get'; // ..method 타입 줄여주기
  url?: string;
  data?: D;
}

interface MyAxios {
  get: <T = any, R = AxiosResponse<T>>(url: string) => Promise<R>,
  post: <T = any, R = AxiosResponse<T>, D = any>(url: string, data: any) => Promise<R>,
  (cofig: {}): void,
  (url: string, cofig: {}): void,
  isAxiosError: (error: unknown) => error is AxiosError;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Creadted {

}

interface Data {
  title: string;
  body: string;
  userId: number;
}

const myAxios: MyAxios = axios;

(async () => {
  try {
    const response = await myAxios.get<Post, AxiosResponse<Post>>('https://jsonplaceholder.typicode.com/posts/1');
    const response2 = await myAxios.post<Creadted, AxiosResponse<Creadted>, Data>('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });

    const response3 = await myAxios({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    })
  }
  catch (error) {
    if(myAxios.isAxiosError(error)) { // 커스텀 타입가드
      // { message: '서버 장애입니다. 다시 시도해주세요.' }
      console.error((error.response as AxiosResponse<{ message: string}>)?.data.message);
    }
    const errorResponse = (error as AxiosError).response;
    console.log(errorResponse?.data);
  }
})()
