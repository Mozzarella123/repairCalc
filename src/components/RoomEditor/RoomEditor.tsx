import * as React from "react";
import { observer } from "mobx-react";
import * as d3 from "d3";
import { func } from "prop-types";
export interface IRoomEditorProps {
  settings: any;
}
export default class RoomEditor<IRoomEditorProps> extends React.Component<
  IRoomEditorProps
  > {
  svg: SVGSVGElement = null;
  xScale = d3
    .scaleLinear()
    .domain([-1, 10]);
  yScale = d3
    .scaleLinear()
    .domain([-1, 10]);
  rescaleX = this.xScale;
  rescaleY = this.yScale;
  polygons = new Array<any>();
  isLine = false;
  isPolygon = true;
  currentPoligon = 0;
  componentDidMount() {
    this.updateEditor();
  }

  componentDidUpdate() {
    this.updateEditor();
  }

  updateEditor() {
    const circleAttrs = (selection: any) => {
      selection.attr('cx', (d: any) => this.rescaleX(d.x))
      selection.attr('cy', (d: any) => this.rescaleY(d.y))
      selection.attr('r', 5)
    }

    const zooming = () => {
      this.rescaleX = d3.event.transform.rescaleX(this.xScale);
      this.rescaleY = d3.event.transform.rescaleY(this.yScale);

      gX.call(xAxis.scale(this.rescaleX));
      gY.call(yAxis.scale(this.rescaleY));

      svg.selectAll('circle')
        .call(circleAttrs)
      stylingTicks();
    }
    function stylingTicks() {
      d3.selectAll(".axis--x .tick").each((d, i, nodes) => {
        const line = d3.select(nodes[i]).select('line');

        if (Number.parseInt(d.toString()[0]) % 10 === 0) {
          line.attr('stroke-width', 2)
        }
      });
    }
    const svg = d3.select(this.svg),
      width = +svg.attr("width"),
      height = +svg.attr("height");
    this.xScale.range([-1, width]),

      this.yScale.range([-1, height]);
    const
      zoom = d3.zoom().on("zoom", zooming),

      xAxis = d3
        .axisBottom(this.xScale)
        .ticks(((width + 2) / (height + 2)) * 10)
        .tickSize(height)
        .tickPadding(8 - height),
      yAxis = d3
        .axisRight(this.yScale)
        .ticks(((width + 2) / (height + 2)) * 10)
        .tickSize(width)
        .tickPadding(8 - width),
      gX = svg
        .append("g")
        .attr("class", "axis axis--x")
        .call(xAxis),
      gY = svg
        .append("g")
        .attr("class", "axis axis--y")
        .call(yAxis);

    svg.call(zoom);
    svg.on('click', (d, i, nodes) => {
      const coords = d3.mouse(d3.select(nodes[i]).node());
      const scaledCoords = {
        x: this.rescaleX.invert(coords[0]),
        y: this.rescaleY.invert(coords[1])
      }
      if (this.polygons.length === 0) {
        this.polygons.push({
          points: [],
          lines: []
        })
      }
      const currentPoligon = this.polygons[this.currentPoligon];
      const points = currentPoligon.points;

      if (points.length >= 1) {
        currentPoligon.lines.push({
          id : currentPoligon.lines.length,
          p1: points[points.length - 1],
          p2: scaledCoords
        });
        const lines = svg.selectAll('line.wall')
          .data(currentPoligon.lines, (d : any) => d.id)
          .enter();
          console.log(lines)
        lines.append('line')
          .attr('x1', this.rescaleX(points[points.length - 1].x))
          .attr('y1', this.rescaleY(points[points.length - 1].y))
          .attr('x2', this.rescaleX(scaledCoords.x))
          .attr('y2', this.rescaleY(scaledCoords.y))
          .attr('class', 'wall')
          .attr('stroke-width', 2)
          .attr('stroke', 'black')
      }
      points.push(scaledCoords);
      svg.selectAll('circle')
        .data(points)
        .enter()
        .append('circle')
        .call(circleAttrs)
    }).on('mousemove', (d, i, nodes) => {
      const coords = d3.mouse(d3.select(nodes[i]).node());
      if (this.polygons.length > 0) {
        const points = this.polygons[this.currentPoligon].points;
        // svg.select(`line.wall#${this.polygons[this.currentPoligon].lines.length}`)
        //   .append('line.wall')
        //   .attr('x1', this.rescaleX(points[points.length - 1].x))
        //   .attr('y1', this.rescaleY(points[points.length - 1].y))
        //   .attr('x2', this.rescaleX(this.rescaleX.invert(coords[0])))
        //   .attr('y2', this.rescaleY(this.rescaleY.invert(coords[1])))
        //   .attr("stroke-width", 2)
        //   .attr("stroke", "black")

      }
    })
  }

  render() {
    return (
      <div className="room-editor">
        <svg
          ref={ref => {
            this.svg = ref;
          }}
          width="500"
          height="500"
        />
      </div>
    );
  }
}
// RoomEditor.defaultProps = {};
