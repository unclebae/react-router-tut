import React from 'react';
import ReactDOM from 'react-dom';

// 이렇게 src 하위의 디렉토리 기준으로 절대 경로를 사용할 수 있는 것은 
// jsconfig.json에서 baseUrl을 ./src로 지정해 주었기 때문입니다. 
// jsconfig.json 파일을 한번 찾아보세요. 
import App from 'components/App';

ReactDOM.render(<App/>, document.querySelector('#root'));