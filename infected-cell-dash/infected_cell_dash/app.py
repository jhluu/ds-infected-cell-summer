from typing import Optional

import dash
from dash.dependencies import Input, Output
from dash.exceptions import PreventUpdate
import dash_core_components as dcc
import dash_html_components as html

import pandas as pd

import plotly.graph_objects as go


def configure_app(app: dash.Dash):
    class Ids:
        pass

    app.layout = html.Div(
        children=[
            dcc.Location(id="url"),
            # TODO: add figures
        ]
    )

    # TODO: add callbacks here


def run():
    app = dash.Dash(__name__)

    configure_app(app)

    app.run_server(debug=True)
