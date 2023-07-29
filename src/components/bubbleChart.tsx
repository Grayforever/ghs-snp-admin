import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface BubbleData {
  title: string;
  subTitle: string;
  color: string;
  bgColor: string;
  r: number;
  position: string;
}

const useStyles = makeStyles({
  colorLegendItem: {
    display: "flex",
    alignItems: "center",
  },
  colorLegendBullet: {
    width: "0.5rem",
    height: "0.5rem",
    marginRight: "0.2rem",
    borderRadius: "50%",
  },
});

const data: BubbleData[] = [
  {
    title: "343",
    subTitle: "AR",
    color: "white",
    bgColor: "#4F9A0A",
    r: 343,
    position: "First",
  },
  {
    title: "233",
    subTitle: "CR",
    color: "#4F9A0A",
    bgColor: "#D4F7E8",
    r: 233,
    position: "Second",
  },
  {
    title: "132",
    subTitle: "ER",
    color: "white",
    bgColor: "black",
    r: 132,
    position: "Third",
  },
  {
    title: "78",
    subTitle: "AHR",
    color: "#707070",
    bgColor: "#EDEDED",
    r: 78,
    position: "Forth",
  },
];

const BubbleChart: React.FC = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);
  const classes = useStyles();

  useEffect(() => {
    const width = 500;
    const height = 500;

    const pack = d3.pack<BubbleData>().size([width, height]).padding(40);

    const root = pack(d3.hierarchy({ children: data }).sum((d) => d.r * 2));

    const simulation = d3
      .forceSimulation(root.leaves())
      .force("x", d3.forceX(width / 2).strength(0.5))
      .force("y", d3.forceY(height / 2).strength(0.5))
      .force("charge", d3.forceManyBody().strength(500))
      .force(
        "collision",
        d3
          .forceCollide()
          .radius((d) => d.r + 2)
          .strength(0.2)
      );

    const svg = d3
      .select(chartRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("text-anchor", "middle");

    const leaf = svg
      .selectAll<SVGGElement, BubbleData>("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x - 1},${d.y - 1})`)
      .attr("font-size", (d) => d.r / 2)
      .attr("cursor", "pointer")
      .on("click", handleClick);

    leaf
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill-opacity", 1)
      .attr("stroke", "none")
      .attr("fill", (d) => d.data.bgColor);

    leaf
      .append("text")
      .attr("fill", (d) => d.data.color)
      .attr("font-weight", "bold")
      .selectAll("tspan")
      .data((d) => d.data.title.split(/(?=[A-Z][a-z])|\s+/g))
      .join("tspan")
      .attr("x", 0)
      .attr("y", "0.3em") // Center vertically
      .text((d) => d);

    const subtitleMargin = 0.5;

    leaf
      .append("text")
      .attr("fill", (d) => d.data.color)
      .selectAll("tspan")
      .data((d) => d.data.subTitle.split(/(?=[A-Z][a-z])|\s+/g))
      .join("tspan")
      .attr("x", 0)
      .attr(
        "y",
        (_, i, nodes) => `${i - nodes.length / 2 + 1.6 + subtitleMargin}em`
      )
      .text((d) => d)
      .attr("font-size", "0.6em");

    function handleClick() {
      const clickedBubble = d3.select(this);
      const isClicked = clickedBubble.attr("data-clicked") === "true";

      clickedBubble.attr("data-clicked", !isClicked);
      clickedBubble
        .select("circle")
        .attr("stroke", isClicked ? "none" : "#707070")
        .attr("strokeWidth", isClicked ? 0 : 10);
    }

    simulation.on("tick", () => {
      leaf.attr("transform", (d) => `translate(${d.x + 1},${d.y + 1})`);
    });

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <Stack>
      <svg ref={chartRef}></svg>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        {data.map((item, index) => (
          <div key={index} className={classes.colorLegendItem}>
            <div
              className={classes.colorLegendBullet}
              style={{ backgroundColor: item.bgColor }}
            />
            <Typography variant="caption" fontWeight={"bold"}>
              {item.position}
            </Typography>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};

export default BubbleChart;
