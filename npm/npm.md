## dependencies와 devDependencies의 차이점

devDependencies에 있는 라이브러리는 프로젝트가 빌드/배포할 때 설치되지 않음 따라서 프로젝트를 사용하는데에 필요하다면 dependencies에 설치해야 한다.
만약 개발용 라이브러리인데 devDependencies로 설치 안하고 dependencies로 설치하면 나중에 빌드/배포할 때 필요없는 라이브러리까지 들어가면서 빌드시간이 오래걸릴 수 있으므로 구분해서 설치한다.

- dependencies : 프로젝트 자체에 필요한 라이브러리
- devDependencies : 개발을 할 때 필요한 라이브러리

## 구분법

npm 홈페이지에서 라이브러리 리드미로 들어가면 다 설명되어 있다.
