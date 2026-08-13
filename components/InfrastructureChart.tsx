'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export interface InfrastructureDataItem {
  label: string;
  acres: number;
  percentage: number;
  color: string;
  description: string;
}

const DATA: InfrastructureDataItem[] = [
  {
    label: 'Residential Plot Area',
    acres: 7.54,
    percentage: 60.5,
    color: '#B08D4F', // Luxury Gold Accent
    description: '184 planned freehold plots (72 - 179 Sq. Yd.)',
  },
  {
    label: 'Roads & Infrastructure',
    acres: 2.31,
    percentage: 18.5,
    color: '#3F3A33', // Deep Neutral / Charcoal
    description: '24m sector entry road & 9m internal access lanes',
  },
  {
    label: 'Green Parks & Open Zones',
    acres: 1.89,
    percentage: 15.2,
    color: '#2F5233', // Forest Green Accent
    description: 'Landscaped central park, yoga lawn & kids play areas',
  },
  {
    label: 'Commercial & Shopping Hub',
    acres: 0.72,
    percentage: 5.8,
    color: '#8C6A2F', // Deep Bronze
    description: 'Convenience retail shops & commercial plaza',
  },
];

export default function InfrastructureChart() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSegment, setActiveSegment] = useState<InfrastructureDataItem | null>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    // Clear previous elements
    d3.select(svgRef.current).selectAll('*').remove();

    const width = 320;
    const height = 320;
    const radius = Math.min(width, height) / 2 - 10;
    const innerRadius = radius * 0.58; // Donut chart design

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', '100%')
      .attr('height', '100%')
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create Pie Generator
    const pie = d3
      .pie<InfrastructureDataItem>()
      .value((d) => d.percentage)
      .sort(null);

    // Arc Generators
    const arc = d3
      .arc<d3.PieArcDatum<InfrastructureDataItem>>()
      .innerRadius(innerRadius)
      .outerRadius(radius)
      .cornerRadius(4)
      .padAngle(0.03);

    const hoverArc = d3
      .arc<d3.PieArcDatum<InfrastructureDataItem>>()
      .innerRadius(innerRadius - 4)
      .outerRadius(radius + 8)
      .cornerRadius(6)
      .padAngle(0.02);

    const pieData = pie(DATA);

    // Draw Arcs
    const paths = svg
      .selectAll<SVGPathElement, d3.PieArcDatum<InfrastructureDataItem>>('path')
      .data(pieData)
      .enter()
      .append('path')
      .attr('fill', (d) => d.data.color)
      .attr('stroke', '#FFFcf7')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')
      .style('transition', 'all 0.3s ease');

    // Initial Grow Animation
    paths
      .transition()
      .duration(900)
      .attrTween('d', function (d) {
        const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arc(i(t)) || '';
        };
      });

    // Hover interactions
    paths
      .on('mouseenter', function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', hoverArc as any)
          .attr('stroke', '#1B1814')
          .attr('stroke-width', 3);
        setActiveSegment(d.data);
      })
      .on('mouseleave', function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', arc as any)
          .attr('stroke', '#FFFcf7')
          .attr('stroke-width', 2);
        setActiveSegment(null);
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="p-6 bg-[#FFFcf7] border border-[#D9C7A8] rounded-2xl shadow-sm space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D9C7A8] pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6A2F]">
            DTCP Approved Master Plan
          </span>
          <h3 className="font-serif text-xl font-bold text-[#1B1814]">
            Township Infrastructure Allocation
          </h3>
        </div>
        <div className="text-right sm:text-right">
          <span className="text-xs text-[#3F3A33] block">Total Site Area</span>
          <strong className="text-sm font-serif font-bold text-[#B08D4F]">
            12.4625 Acres (100%)
          </strong>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* D3 SVG Donut Chart */}
        <div className="md:col-span-6 relative flex justify-center items-center">
          <div className="w-64 h-64 sm:w-72 sm:h-72 relative">
            <svg ref={svgRef} className="w-full h-full overflow-visible" />
            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
              {activeSegment ? (
                <div className="animate-fade-in transition-all">
                  <span className="text-[10px] uppercase font-bold text-[#8C6A2F] block">
                    {activeSegment.label}
                  </span>
                  <strong className="text-lg font-serif font-bold text-[#1B1814] block">
                    {activeSegment.percentage}%
                  </strong>
                  <span className="text-[11px] font-semibold text-[#B08D4F] block">
                    {activeSegment.acres} Acres
                  </span>
                </div>
              ) : (
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8C6A2F] block">
                    Total Area
                  </span>
                  <strong className="text-xl font-serif font-bold text-[#1B1814] block">
                    12.46
                  </strong>
                  <span className="text-[11px] font-medium text-[#3F3A33] block">
                    Acres
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Legend & Details */}
        <div className="md:col-span-6 space-y-3">
          {DATA.map((item) => {
            const isHovered = activeSegment?.label === item.label;
            return (
              <div
                key={item.label}
                onMouseEnter={() => setActiveSegment(item)}
                onMouseLeave={() => setActiveSegment(null)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isHovered
                    ? 'bg-[#F7F1E8] border-[#B08D4F] shadow-md scale-[1.02]'
                    : 'bg-[#F7F1E8]/50 border-[#D9C7A8] hover:bg-[#F7F1E8]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-semibold text-xs text-[#1B1814]">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-xs text-[#1B1814] block">
                      {item.percentage}%
                    </span>
                    <span className="text-[10px] text-[#8C6A2F] font-medium block">
                      {item.acres} Acres
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-[#3F3A33] mt-1 pl-6 leading-tight">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
