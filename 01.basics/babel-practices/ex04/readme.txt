Env Preset
 - 관련 플러그인들을 모아 놓고 한번에 적용하기 위해서 미리 플러그인들을 모아 놓은 것
 - ECMAScript 년도별로 모아놓은 것들, state(0, 1, 2, 3) 레벨 모아 놓은 것, 3rd party(typescript, react) 등 종류 다양하다.
 - Env Preset은 stage 3 레벨 이상되는 문법들의 플러그인
 - Env preset 뿐만 아니라 다양한 플러그인들은 babel 설정을 통해서 적용할 수 있다.(babel.config.json) 

Env(preset) 설치 하기
$ npm i -D @babel/core @babel/cli @babel/preset-env

Env Preset의 플러그인 항목 확인하기
$ npm list --depth=1 | grep "babel-plugin"

Env Preset 설정하기(브라우저 타겟 설정)
브라우저별 es6 호환성 테이블 정보(kangax.github.io/compat-table/es6)

변환하기
$ npx babel src/ex.js -o dist/ex.js

