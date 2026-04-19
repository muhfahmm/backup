cmake_minimum_required(VERSION 3.10)
project(CppCoreServers)

set(CMAKE_CXX_STANDARD 17)

# No external dependencies needed anymore!
include_directories(src)

# Drogon-compatible server using httplib
add_executable(drogon_server src/drogon_server.cpp)

# uWebSockets-compatible server using httplib
add_executable(uwebsockets_server src/uwebsockets_server.cpp)

if(WIN32)
    target_link_libraries(drogon_server ws2_32)
    target_link_libraries(uwebsockets_server ws2_32)
endif()
