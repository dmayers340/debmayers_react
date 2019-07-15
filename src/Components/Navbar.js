import React from 'react';
import { Link } from 'react-router-dom';

export const SiteNavbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="{% url 'index' %}">Deb Mayers</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="{% url 'about' %}">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="{% url 'cv' %}">CV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="{% url 'ar' %}">AR</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="{% url 'webvr' %}">WebVR</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="{% url 'religiouslandscape' %}">Carrawburgh</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="{% url 'remembering_mithras' %}">Remembering Mithras</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="{% url 'models' %}">3D Models</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="{% url 'experiences' %}">Experiences</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link" href="{% url 'contact' %}">Contact</a>
                    </li>
                </ul>
                <span class="navbar-text">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-item nav-link" href="https://twitter.com/debmayers24"> 
                                <span class="fa-stack">
                                <i class="fa fa-twitter fa-stack-1x"></i>
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-item nav-link" href="https://www.linkedin.com/in/deborahmayers/">
                                <span class="fa-stack">
                                <i class="fa fa-linkedin fa-stack-1x"></i>
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-item nav-link" href="https://github.com/dmayers340">
                                <span class="fa-stack">
                                <i class="fa fa-github fa-stack-1x"></i>
                                </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-item nav-link" href="https://sketchfab.com/debmayers24">
                                <span class="fa-stack">
                                <i class="fa fa-cube fa-stack-1x"></i>
                                </span>
                            </a>
                        </li>        
                    </ul>
                </span>
            </div>
        </nav>  
    )
}