#include "httplib.h"
#include <iostream>

int main() {
    httplib::Server svr;

    svr.Get("/api/simulation/status", [](const httplib::Request&, httplib::Response& res) {
        res.set_content("{\"engine\":\"C++\",\"framework\":\"Lightweight-HttpLib\",\"status\":\"Ready\"}", "application/json");
    });

    std::cout << "C++ Lightweight Server (Drogon Mock) running on port 8082" << std::endl;
    svr.listen("0.0.0.0", 8082);

    return 0;
}
