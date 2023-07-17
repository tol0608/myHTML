function getParameter(paramName, paramValue) {
    var parameter = {
        paramName: paramName,
        paramValue: paramValue
    };

    return parameter;
}

function getParameters(search) {
    var params = search.substr(1).split('&');

    for (var i in params) {
        var param = params[i].split('=');
        params[i] = getParameter(param[0], decodeURIComponent(param[1]));
    }

    var parameters = {
        params: params,

        getParamValue: function (paramName) {
            var paramValue = '';

            for (var i in this.params) {
                if (params[i].paramName === paramName) {
                    paramValue = param[i].paramValue;
                    break;
                }
            }
            return paramValue;

        }
    }
    return parameters
}
