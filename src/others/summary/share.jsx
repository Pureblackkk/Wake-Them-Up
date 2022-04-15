import * as d3 from "d3";
import { SummaryEventName } from '../../global/event-name-config';

export class SummaryShare {
    constructor(rootId) {
        this.rootId = rootId;
        this.colorList = [];
        this.previousWidthList = [0, 0];
        
        // Define the total width and svg object
        this.totalWidth = 260;
        this.barHeight = 30;
        this.svg = this.initSvg(rootId);

        // Init event listener
        this.initEventListener();

        // Init the share bar 
        this.initShareBar();
    }

    /**
     * Init Svg object giveb the rootId
     */
    initSvg(rootId) {
        const svg = d3.select(`#${rootId}`)
                    .append('svg')
                    .attr('width', this.totalWidth)
                    .attr('height', this.barHeight);
        
        return svg;
    }

    /**
     * Init event listener
     */
    initEventListener() {
        window.Eventer.addEventListener(SummaryEventName.drawShare, this.drawShareBar.bind(this));
        window.Eventer.addEventListener(SummaryEventName.updateShareColor, this.updateBarColor.bind(this));
    }

    /**
     * Init share bar plot 
     */
    initShareBar() {
        // Set bar color
        this.setBarColor();

        // Init bar plot
        this.svg.selectAll('rect')
        .data([0, 0])
        .enter()
        .append('rect')
        .attr('x', (d, i) => (i == 0 ? 0 : this.totalWidth))
        .attr('y', 10)
        .attr('rx', 9)
        .attr('ry', 9)
        .attr('width', 0)
        .attr('height', 18)
        .style('fill', (d, i) => this.colorList[i]);
    }

    /**
     * Draw share data bar plot 
     * @param {list} shareData 
     */
    drawShareBar(shareData) {
        const [sleep, awake] = shareData;
        if (sleep == null || awake == null) { return }

        // Make share width
        const sum = sleep + awake;
        const sleepWidth = Math.round(this.totalWidth * (sleep / sum));
        const awakeWidth = this.totalWidth - sleepWidth;

        // Update previous width
        this.previousWidthList = [sleepWidth, awakeWidth];

        this.svg.selectAll('rect')
        .data(shareData)
        .transition()
        .duration(500)
        .ease(d3.easeLinear)
        .attr('x', (d, i) => (i == 0) ? 0 : sleepWidth)
        .attr('width', (d, i) => i == 0 ? sleepWidth : awakeWidth);
    }

    /**
     * Update the bar color
     */
    updateBarColor(type, fillColor) {
        console.log('updateColor', fillColor);
        this.svg.selectAll('rect')
        .filter((d, i) => i == type)
        .style('fill', fillColor);
    }

    /**
     * Get bar color
     */
    setBarColor() {
        window.Eventer.dispatchEvent(
            SummaryEventName.getShareColor,
            this.colorList
        )
    }
}