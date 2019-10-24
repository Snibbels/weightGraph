
import React, { Component } from 'react';
import { getExerciseHistoryData } from './dataUtils';
import * as d3 from 'd3';

export default class ExerciseGraph extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { exercise, history } = this.props;
        this.data = getExerciseHistoryData(exercise.id, history);
    }

    componentDidMount() {
        const canvas = this.refs.canvas
        const { data } = this;
        const w = canvas.offsetWidth;
        const h = 200;
        const padding = 20;

        const svg = d3.select(canvas)
            .append('svg')
            .attr('width', w)
            .attr('height', h)

        const yAxisScale = d3.scaleLinear()
            .domain([d3.min(data, d => d.weight), d3.max(data, d => d.weight)])
            .range([h - 5, padding])

        const yScale = d3.scaleLinear()
            .domain([d3.min(data, d => d.weight), d3.max(data, d => d.weight)])
            .range([h - padding, padding])

        const yAxis = d3.axisLeft()
            .scale(yAxisScale)
            .ticks(5)

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('fill', 'teal')
            .attr('y', d => h - yScale(d.weight))
            .attr('x', (d, i) => 50 * (i + 1))
            .attr('width', 40)
            .attr('height', d => (yScale(d.weight) - 5)
            )
        svg.append('g')
            .call(yAxis)
            .attr('transform', `translate(30, 0)`)

    }

    render() {
        const { exercise } = this.props;

        return (
            <div {...this.props} >
                <h2>
                    {exercise.name}
                </h2>
                <div ref="canvas"></div>
            </div>
        )
    }
}