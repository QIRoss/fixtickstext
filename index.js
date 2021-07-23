const chart = c3.generate({
    data: {
        columns: [
            ['Data Series', 3055555, 2005555, 155600, 4065760, 1556750, 26576750, 7348328, 324324, 3243243, 3434453, 43545345, 4543543, 34543543],
        ],
        type: 'bar',
        labels: {
            show: true
        }
    },
    onrendered: () => {
        d3.selectAll(".c3-axis-y text").attr("transform", "rotate(45)").attr("y", -1).style("text-anchor", "start");
        d3.selectAll(".c3-axis-y tspan").attr("dy", ".7em").attr("dx", 7.7);
    },
    legend: {
        position: "right"
    },
    bar: {
        width: {
            ratio: 0.9
        }
    },
    axis: {
        rotated: true,
        x: {
            tick: {
              rotate: 45
            }
        }
    },
    size: {
      width: 600
    }
});