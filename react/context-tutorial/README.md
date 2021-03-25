#### Context는 주로 어떤 용도로 사용 되나?

- 주로 애플리케이션 으로 전연적으로 데이터가 사용되야 할 때 사용.
- 로그인 정보, 애플리케이션 설정, 테마 등..

#### Context 만들기

- Context는 createContext라는 함수를 사용해서 만든다.
- Provider, Consumer 라는 컴포넌트를 반환한다.
- Provider는 Context에서 사용할 값을 설정할 때 사용한다.
- Consumer는 나중에 우리가 설정한 값을 불러와야할 때 사용한다.

#### Provider 사용하기

- Context를 프로젝트에 적용하려면, 앱을 Provider로 감싸줘야 한다.

#### Consumer 사용하기

- Consumer는 컴포넌트에서 Contenxt를 사용해야할 때 사용된다.
