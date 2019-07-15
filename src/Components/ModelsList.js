import React from 'react';
import { Project } from './Project';
import { projects } from '../config/debstuff.json';
import '../css/models.css';

export const ModelsList = () => {
    return (
        <div>
            <div class="row">
            <div class="col-md-6">            
                {projects.map(project => <Project project={project} />)}
            </div>
            <div class="col-md-6">            
                <div class="sketchfab-embed-wrapper"><iframe src="https://sketchfab.com/models/ab740d01dc7f49018d45369014bfacb8/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <p className = "sketchfab">
                        <a href="https://sketchfab.com/3d-models/corbridge-lion-ab740d01dc7f49018d45369014bfacb8?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">Corbridge Lion</a>
                        by <a href="https://sketchfab.com/debmayers24?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">debmayers24</a>
                        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">Sketchfab</a>
                    </p>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="sketchfab-embed-wrapper"><iframe src="https://sketchfab.com/models/ccc6565d3b49425f90686d5779a3ba9a/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <p className="sketchfab">
                        <a href="https://sketchfab.com/3d-models/relief-of-sol-from-corbridge-ccc6565d3b49425f90686d5779a3ba9a?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">Relief of Sol from Corbridge</a>
                        by <a href="https://sketchfab.com/debmayers24?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">debmayers24</a>
                        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">Sketchfab</a>
                    </p>
                </div>
            </div>
        
            <div class = "col-md-6">
                <div class="sketchfab-embed-wrapper"><iframe src="https://sketchfab.com/models/8c9af76382c64c4ba019d47156f57cf5/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <p className = "sketchfab">
                        <a href="https://sketchfab.com/3d-models/statue-of-juno-regina-from-chesters-roman-fort-8c9af76382c64c4ba019d47156f57cf5?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">Statue of Juno Regina from Chesters Roman Fort</a>
                        by <a href="https://sketchfab.com/debmayers24?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">debmayers24</a>
                        on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">Sketchfab</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="sketchfab-embed-wrapper"><iframe src="https://sketchfab.com/models/a094e8663e0447a1bd42e4a127c8180c/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            <p className = "sketchfab">
                    <a href="https://sketchfab.com/3d-models/stone-balls-aberdeenshire-a094e8663e0447a1bd42e4a127c8180c?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">Stone Balls Aberdeenshire</a>
                    by <a href="https://sketchfab.com/debmayers24?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">debmayers24</a>
                    on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" className = "sketchfab-link">Sketchfab</a>
                </p>
            </div>
        </div>

        <div class="col-md-6">
            <div class="sketchfab-embed-wrapper">
                <iframe src="https://sketchfab.com/models/27d658b2b63a4521ab661c8350a34abf/embed"
                frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true">
                </iframe>
                <p className = "sketchfab">
                <a href="https://sketchfab.com/models/27d658b2b63a4521ab661c8350a34abf?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">Linlithgow Fountain</a>
                by <a href="https://sketchfab.com/debmayers24?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">debmayers24</a>
                on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank"
                    className = "sketchfab-link">Sketchfab</a>
                </p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="sketchfab-embed-wrapper">
                <iframe src="https://sketchfab.com/models/3df8aae0202e45f7b2143d50d386fae7/embed"
                frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true">
                </iframe>
                <p className = "sketchfab">
                <a href="https://sketchfab.com/models/3df8aae0202e45f7b2143d50d386fae7?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">University of Glasgow Main Building</a>
                by <a href="https://sketchfab.com/debmayers24?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">debmayers24</a>
                on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank"
                    className = "sketchfab-link">Sketchfab</a>
                </p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="sketchfab-embed-wrapper">
                <iframe src="https://sketchfab.com/models/5c775ab2a6184ad98675305f6652ef59/embed"
                frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true">
                </iframe>
                <p className = "sketchfab">
                <a href="https://sketchfab.com/models/5c775ab2a6184ad98675305f6652ef59?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">Roman Fort at Carrawburgh</a>
                by <a href="https://sketchfab.com/debmayers24?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">debmayers24</a>
                on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank"
                    className = "sketchfab-link">Sketchfab</a>
                </p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="sketchfab-embed-wrapper">
                <iframe src="https://sketchfab.com/models/36cb436152b84d3d9c1549b0ed69ccef/embed"
                frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true">
                </iframe>
                <p className = "sketchfab">
                <a href="https://sketchfab.com/models/36cb436152b84d3d9c1549b0ed69ccef?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">Temple to Mithras Carrawburgh</a>
                by <a href="https://sketchfab.com/debmayers24?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">debmayers24</a>
                on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank"
                    className = "sketchfab-link">Sketchfab</a>
                </p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="sketchfab-embed-wrapper">
                <iframe src="https://sketchfab.com/models/8b0a0cdb2e02428bab3451dfb3e31128/embed"
                frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true">
                </iframe>
                <p className = "sketchfab">
                <a href="https://sketchfab.com/models/8b0a0cdb2e02428bab3451dfb3e31128?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">Carrawburgh Mithraeum</a>
                by <a href="https://sketchfab.com/debmayers24?utm_medium=embed&utm_source=website&utm_campain=share-popup"
                    target="_blank" className = "sketchfab-link">debmayers24</a>
                on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campain=share-popup" target="_blank"
                    className = "sketchfab-link">Sketchfab</a>
                </p>
            </div>
        </div>
        </div>
    );
}