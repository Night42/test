import pymysql
import requests
import json

def get_conn():
    conn = pymysql.connect(
        host="localhost",
        user="root",
        database="views",
        password="root",
        charset="utf8",
        port=3306
    )

    cursor = conn.cursor()
    return conn, cursor


def close_conn(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()


def query(sql, *args):
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res


def survey_basic_info_data():
    res = query("SELECT * from survery_basic_info")
    data = []
    for i in res:
        for r in i:
            data.append(r)
    return data

def survey_shop_info_data():
    res = query("select * from survey_shop_info")
    data = []
    for i in res:
        data.append(i)
    return data

def survey_shop_basic_data():
    res = query("SELECT * from survey_shop_basic")
    data = []
    for i in res:
        for r in i:
            data.append(r)
    return data

def survey_chart3():
    sql = "SELECT * from survey_chart3"
    res = query(sql)
    data = []
    for i in res:
        data.append({'name': i[0], 'value': int(i[1])})
    return data

def survey_chart2_data():
    sql = "select * from survey_chart2"
    res = query(sql)
    ydata = []
    xdata = []
    for i in res:
        ydata.append({'name': i[0], 'value': int(i[1])})
        xdata.append(i[0])
    return ydata, xdata

def survey_chart5_data():
    res = query("SELECT * from survey_chart5")
    data1 = []
    data2 = []
    for i in res:
        data1.append(i[0])
        data2.append(i[1])
    return data1, data2

def survey_shuiipin_data():
    sql = "select * from survey_shuiipin"
    res = query(sql)
    data = []
    for i in res:
        data.append({'name': i[0], 'value': int(i[1])})
    return data

def survey_diqu_data():
    sql = "select * from survey_diqu"
    res = query(sql)
    data = []
    for i in res:
        data.append({'name': i[0], 'value': int(i[1])/2})
    return data

def survey_chart4_data():
    res = query("SELECT * from survey_chart4")
    data1 = []
    data2 = []
    data3 = []
    data4 = []
    data5 = []
    for i in res:
        data1.append(i[0])
        data2.append(i[1])
        data3.append(i[2])
        data4.append(i[3])
        data5.append(i[4])
    return data1,data2,data3,data4,data5

if __name__ == '__main__':
    print(index3_chart8_data())