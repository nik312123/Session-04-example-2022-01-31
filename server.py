from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def main_page():
    user_name = request.args.get("userName", "unknown")
    return render_template('main.html', user = user_name)


@app.route('/table-tennis')
def table_tennis():
    return render_template('table_tennis.html')


@app.route('/table-tennis-encouragement')
def table_tennis_encouragement():
    name = request.args.get("myname", "null")
    return render_template("table-tennis-encouragement.html", name = name)
