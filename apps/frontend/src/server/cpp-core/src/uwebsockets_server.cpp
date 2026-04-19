#include "httplib.h"
#include <iostream>

int main() {
    httplib::Server svr;

    svr.Get("/api/simulation/status", [](const httplib::Request&, httplib::Response& res) {
        res.set_content("{\"engine\":\"C++\",\"framework\":\"uWebSockets-Mock-HttpLib\",\"status\":\"Ready\"}", "application/json");
    });

    std::cout << "C++ Lightweight Server (uWS Mock) running on port 8083" << std::endl;
    svr.listen("0.0.0.0", 8083);

    return 0;
}
