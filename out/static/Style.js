import css from 'styled-jsx/css';

export default
    <style>{`
        body {
            marigin: 10px;
        }
        header {
            font-size: 64pt;
            font-weight: bold;
            text-align: right;
            color: #dddddd;
        }
        header p {
            font-size: 32pt;
        }
        header h1 {
            font-size: 40pt;
        }
        footer {
            font-size: 12pt;
            position: relative;
            text-align: right;
            color: #99c;
            margin: 50px 0 10px 0;
            bottom: 10px;
            right: 10px;
            left: 10px;
        }
        footer p {
            font-size: 12pt;
            text-align: center;
        }
        h1 {
            font-size: 22pt;
            font-weight: bold;
            text-align: center;
            color: #f0f0f0;
        }
        p  {
            margin: 0px;
            color: #666;
            font-size: 16pt;
        }
        button {
            padding: 5px;
            color: white;
            background-color: tomato;
        }
        input {
            border: 2px solid gray;
        }
        hr {
            margin: 25px 0px;
        }
        tr {
            margin: 0px;
        }
        th {
            font-size: 14pt;
            font-weight: plain;
            text-align: left;
            padding: 0px 20px;
            margin: 0px;
            border-bottom: 1px solid gray;
        }
        td {
            font-size: 14pt;
            font-weight: plain;
            text-align: right;
            padding: 0px 20px;
            margin: 0px;
            border-bottom: 1px solid gray;
        }
        `}</style>;
