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

  componentDidMount() {
    this.updateEditor();
  }

  componentDidUpdate() {
    this.updateEditor();
  }

  updateEditor() {
    function zooming() {
      gX.call(xAxis.scale(d3.event.transform.rescaleX(xScale)));
      gY.call(yAxis.scale(d3.event.transform.rescaleY(yScale)));
      stylingTicks();
    }
    function stylingTicks() {
        d3.selectAll(".axis--x .tick").each((d,i,nodes) => {
            const line = d3.select(nodes[i]).select('line');
            
            if ( Number.parseInt(d.toString()[0]) % 10 ===0) {
                line.attr('stroke-width', 2)
            }
        });
    }

    const svg = d3.select(this.svg),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      zoom = d3.zoom().on("zoom", zooming),
      xScale = d3
        .scaleLinear()
        .domain([0, 10])
        .range([-1, width]),
      yScale = d3
        .scaleLinear()
        .domain([-1, 10])
        .range([-1, height]),
      xAxis = d3
        .axisBottom(xScale)
        .ticks(((width + 2) / (height + 2)) * 10)
        .tickSize(height)
        .tickPadding(8 - height),
      yAxis = d3
        .axisRight(yScale)
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
    svg.on('click', ()=> {
        
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
