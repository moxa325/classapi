# classapi

<概要>

classapiはAWS(EC2)で動作する大学の時間割を表示、管理するWebAPIです。


<機能一覧>

大学の時間割とその詳細(授業名:classname、曜日:dow、時限:nth、欠席回数:absense)を表示、管理します。
PostmanなどのAPIクライアントアプリケーションでGET/POST/PUT/DELETEリクエストを行うことができます。


<エンドポイント>

http://52.196.239.174:3000/api/class
＊プロセスは常時起動しております



<使用している技術>


動作環境：AWS(EC2,RDS)

言語：Node.js、Mysql

使用npmパッケージ（Node.js）：Express, Bodyparser, mysql, forever
