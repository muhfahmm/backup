#include <iostream>
#include <vector>
#include <cmath>

#ifndef M_PI
#define M_PI 3.14159265358979323846
#endif

struct Point { double x; double y; };
struct Viewport { double xMin; double yMin; double xMax; double yMax; };

/**
 * CPP Map Engine - Optimized Geometry Processor
 * Fitur: Frustum Culling & Fast Projection
 */
class GeometryProcessor {
public:
    // Cek apakah koordinat berada di dalam viewport sebelum diproses berat
    static bool isVisible(double x, double y, const Viewport& vp) {
        return (x >= vp.xMin && x <= vp.xMax && y >= vp.yMin && y <= vp.yMax);
    }

    static Point project(double lng, double lat, int width, int height) {
        double x = (lng + 180.0) * (width / 360.0);
        double latRad = lat * M_PI / 180.0;
        double y = (height / 2.0) - (width * std::log(std::tan((M_PI / 4.0) + (latRad / 2.0))) / (2.0 * M_PI));
        return {x, y};
    }
};

int main() {
    std::cout << "CPP: Optimized Geometry Engine Active with Culling logic." << std::endl;
    return 0;
}
