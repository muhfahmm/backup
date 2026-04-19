#include "httplib.h"
#include <iostream>
#include <windows.h>
#include <psapi.h>
#include <string>
#include <iomanip>
#include <sstream>

/**
 * CPP Drogon Mock Server - Ultra Performance
 * Port: 8082
 */

double GetMemoryUsageMB() {
    PROCESS_MEMORY_COUNTERS_EX pmc;
    if (GetProcessMemoryInfo(GetCurrentProcess(), (PROCESS_MEMORY_COUNTERS*)&pmc, sizeof(pmc))) {
        return (double)pmc.PrivateUsage / (1024.0 * 1024.0);
    }
    return 0.0;
}

int main() {
    httplib::Server svr;

    svr.Get("/api/simulation/status", [](const httplib::Request&, httplib::Response& res) {
        double mem = GetMemoryUsageMB();
        std::stringstream ss;
        ss << std::fixed << std::setprecision(2) << mem;
        
        std::string json = "{\"engine\": \"C++\", \"framework\": \"Drogon-Mock\", \"status\": \"Active\", \"memory_mb\": " + ss.str() + "}";
        res.set_content(json, "application/json");
    });

    std::cout << "Starting CPP Drogon Mock Server on port 8082..." << std::endl;
    svr.listen("0.0.0.0", 8082);

    return 0;
}
