# API Solo Project

## 目次

- [API の説明](#APIの説明)
- [エンドポイントの説明](#エンドポイントの説明)
- [利用方法](#利用方法)

## API の説明

この API はスシドーのメニューを管理するためのものです。
具体的にはメニューに対して以下の操作を実行可能です。

- 全メニューを取得する（GET）
- メニューを追加する（POST）
- メニューを修正する（PATCH）
- メニューを削除する（DELETE）

## エンドポイントの説明

本 API で用意しているエンドポイントは以下になります。

- /menu
  sushido のデータベースに格納されている menu テーブルの情報を操作するためのエンドポイントです。

## 利用方法

- 初めて利用する場合の準備
  ターミナルにて以下の操作を実行してください。

1.  ”npm install”を実行する（必要なパッケージをインストールする）
2.  ”echo "CREATE DATABASE sushido;" | psql”を実行する（sushido のデータベースを作成する）
3.  ”npm run migrate”を実行する（sushido データベースに menu テーブルを作成する）
4.  ”npm run seed”を実行する（menu テーブルにメニューのデータを追加する）
5.  ”npm run start”を実行する（サーバを起動する）

- 利用が 2 回目以降の場合の準備
  ターミナルにて以下の操作を実行してください。

1.  （メニューの内容を初期化したい場合は）”npm run seed”を実行する
2.  ”npm run start”を実行する（サーバを起動する）

各メソッドの利用方法
Thunder Client 等を用いて以下のように利用してください

- GET

1.  GET メソッドを実行する
2.  menu テーブルの全データが取得される

- POST

1.  body に”[{"id":(id の番号),"neta":(追加したいネタ),"price":(価格)}]”を記載する
    例：[{"id":7,"neta":"Suzuki","price":250}]
2.  POST メソッドを実行する
3.  body に記載したメニューが menu テーブルに追加される

- PATCH

1.  body に”[{"id":(変更したいメニューの id),"neta":(変更後のネタ),"price":(変更後の価格)}]”を記載する
    例：[{"id":3,"neta":"Tai","price":300}]
2.  PATCH メソッドを実行する
3.  body に記載した id のメニューが menu テーブルで変更される

- DELETE

1.  body に”[{"id":(削除したいメニューの id)}]”を記載する
    例：[{"id":7}]
2.  DELETE メソッドを実行する
3.  body に記載した id のメニューが menu テーブルから削除される
