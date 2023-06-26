from flask import Flask, render_template
import viewdata.tools as tool
from flask import jsonify, json
from flask_cors import CORS

app = Flask(__name__, static_folder='', static_url_path='')
CORS(app, resources='/*')
app.config['JSON_AS_ASCII'] = False
app.config['JSONIFY_PRETTYPRNT_REGULAR'] = False
app.config['JSON_SORT_KEYS'] = False

@app.route("/")
def index():
    return render_template("survey.html")

@app.route("/js/data-1482909892121-BJ3auk-Se.json", methods=['GET'])
def survey_json_get():
    with open(r"D:\Projects\PycharmProjects\全国热门品牌手机销售分析\Viewdata-master\statics\js\data-se.json", encoding='utf-8') as f:
        jsonStr = json.load(f)
        return json.dumps(jsonStr)

@app.route("/survey/top_list")
def task9():
    data = tool.survey_basic_info_data()
    return jsonify(data)

@app.route("/survey/shop_info")
def task10():
    data = tool.survey_shop_info_data()
    return jsonify(data)

@app.route("/survey/shop_basic")
def task11():
    data = tool.survey_shop_basic_data()
    return jsonify(data)

@app.route("/survey/chart3")
def task12():
    data = tool.survey_chart3()
    return jsonify(data)

@app.route("/survey/chart2")
def task13():
    data = tool.survey_chart2_data()
    y_data = data[0]
    x_data = data[1]
    return jsonify({"ydata": y_data, "xdata": x_data})

@app.route("/survey/chart5")
def task14():
    data = tool.survey_chart5_data()
    return jsonify({"Names": data[0], "Values": data[1]})

@app.route("/survey/shuiipin")
def task15():
    data = tool.survey_shuiipin_data()
    return jsonify(data)

@app.route("/survey/diqu")
def task16():
    data = tool.survey_diqu_data()
    return jsonify(data)

@app.route("/survey/chart4")
def task17():
    data = tool.survey_chart4_data()
    return jsonify({"data1": data[0], "data2": data[1], "data3": data[2], "data4": data[3], "thedate": data[4]})


if __name__ == '__main__':
    app.debug = True
    app.run()