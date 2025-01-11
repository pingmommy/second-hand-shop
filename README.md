![header](https://capsule-render.vercel.app/api?type=waving&color=ffcb4a&height=300&section=header&text=SecondHandShop&fontSize=90&fontColor=f7f2eb)

## ✏️ 프로젝트 소개 

리스트업, 페이지네이션, 무한스크롤, 글 작성, 수정 및 삭제 등

웹의 핵심이 되는 기능들로 채워진 **게시판**과

로그인, 권한분기, 결제 등 추가적인 기능으로 

게시판을 고도화한 **중고마켓**을 구현한 프로젝트입니다. 


<br/>

🌐 소개페이지 링크 : https://pingmommy.github.io/intro_SHS/


<br/>

> [!NOTE]
> 백엔드 API 외부노출이 차단되어 있어, 프로젝트 소개 페이지로 프로젝트 사이트를 대신합니다.


<br/><br/>

## ✏️ 개발환경

```
next 12.1.0
react: 17.0.2
react-dom: 17.0.2
typescript: ^4.8.4
types/node: 17.0.2
types/react: 17.0.2
apollo/client: ^3.6.9
emotion/styled: ^11.10.0
material-ui/core: 4.12.4
antd: ^4.22.8
eslint: ^8.0.1
prettier: 2.7.1

```

<br/><br/>

## ✏️ Point


<details>
  <summary>디바운싱을 적용한 검색</summary>

<br/>

 ```JavaScript
import _ from "lodash";

export default function SearchBarWithBtn(props: ISearchProps): JSX.Element {
 const debounce = _.debounce((value: string) => {
   props.onSearch(value);
  }, 500);

...

}

```


<br/>


</details>


<details>
  <summary>이미지, 유투브영상 업로드</summary>
  <div>우후후후</div>
  <!-- 내용 -->
</details>


<details>
  <summary>JWT방식의 로그인과 권한 분기</summary>

<br/>

 ```JavaScript

// 로그인


export default function LogIn(): JSX.Element {
  const router = useRouter();

  const [loginUser] = useMutationLoginUser();



// zustand를 활용한 globalstate 사용

  const setAccessToken = useAccessToken((state) => state.setToken);
  const setLoggedIn = useLogIn((state) => state.setIsLoggedIn);

  const handleLogin = async (data: IMutationLoginUserArgs): Promise<void> => {
    try {
      const result = await loginUser({ variables: { ...data } });
      setAccessToken(result?.data?.loginUser.accessToken ?? "");
      void router.push("/productShop");
      setLoggedIn(true);
    } catch (err) {
      if (err instanceof Error) {
        Modal.info({ content: err.message });
      }
    }
  };

  return (  ... );
}

```


<br/>

 ```JavaScript

// 권한분기


import { useEffect } from "react";
import { useAccessToken } from "../../../../commons/stores";

import { useRouter } from "next/router";

export const useAuth = (): void => {
  const router = useRouter();


// zustand를 활용한 globalstate 사용

  const accessToken = useAccessToken((state) => state.accessToken);

  useEffect(() => {
    if (accessToken === "") {
      void router.push("/logIn");
    }
  }, []);
};




// mypage에 적용


export default function myPagePage(): JSX.Element {

...

  useAuth();

  return ( ...  );
}

```


<br/>


</details>


<details>
  <summary>카카오 지도 및 웹 에디터</summary>

<br/>

 ```JavaScript

// 지도


//에러방지를 위한 타입선언 (kakao)
declare const window: typeof globalThis & { kakao: any };

export default function MyMap({ address }: IMyMapProps): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js? ... ";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => { ... }
}
      
   
  }, [address]);

  return (   
      <div id="map" style={{ width: "100%", height: "400px" }}></div>    
  );
}


```



<br/>


 ```JavaScript

// 웹 에디터

src\components\commons\editor\index.tsx

export default function MyQuillEditor(props: IProps): JSX.Element {
...

  const clean = DOMPurify.sanitize(props.data);
  return (
    <InnerWrapper>
      <Title>상품설명</Title>
      <div
        ref={editorRef}
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    </InnerWrapper>
  );
}



// 적용

src\components\units\product\write\ProductWrite.index.tsx

export default function ProductWrite(): JSX.Element {

const MyQuillEditor = dynamic(
  async () => await import("../../../commons/editor"),
  { ssr: false }
);

  return (
...
  <MyQuillEditor
          setContents={setContents}
          data={prevData?.fetchUseditem.contents ?? ""}
        />

...
  );
}


```

<br/>


</details>


<details>
  <summary>페이지네이션과 무한스크롤</summary>
  <div>우후후후</div>
  <!-- 내용 -->
</details>


<details>
  <summary>CSS in JS로 스타일링</summary>

<br/>

 ```JavaScript
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const YoutubeWrapper = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;
  overflow: hidden;
`;

export const Youtube = styled(ReactPlayer)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

```


<br/>


</details>


<details>
  <summary>GraphQL을 활용한 데이터 통신 </summary>

<br/>

 ```JavaScript
import { gql, useMutation } from "@apollo/client";
import type { ... } from "../../../../commons/types/generated/types";

const LOG_IN = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export const useMutationLoginUser = (): MutationTuple<
  Pick<IMutation, "loginUser">,
  IMutationLoginUserArgs,
  DefaultContext,
  ApolloCache<IMutation>
> => {
  const mutation = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOG_IN);

  return mutation;
};


```


<br/>


</details>







<br/><br/>

## ✏️ 프로젝트 이미지

<br/>

**자유게시판**
<img width='100%' src='https://github.com/user-attachments/assets/33aa6f80-5e9a-43d0-9a37-e281d9058034'/>


<br/>

**중고마켓**
<img width='100%' src='https://github.com/user-attachments/assets/42964b9d-ba22-4d51-ac43-021dd21b1f91'/>


<br/>

**마이페이지**
<img width='100%' src='https://github.com/user-attachments/assets/63eca418-07a2-4548-9936-2cac9c14638f'/>

