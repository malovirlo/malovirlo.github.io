import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Easy to Use",
        Svg: require("@site/static/img/easytouse.svg").default,
        description: (
            <>
                It's a simple framework, easy to use and to understand. It's a
                good way to learn how to make a framework.
            </>
        ),
    },
    {
        title: "Focus on What Matters",
        Svg: require("@site/static/img/concentration.svg").default,
        description: (
            <>
                You can focus on your project, and not on the framework. It's
                not a big framework, so you can understand it easily. I only use
                the MVC pattern, and the router.
            </>
        ),
    },
    {
        title: "Make by Malo",
        Svg: require("@site/static/img/engineer.svg").default,
        description: (
            <>
                Hi, i'm Malo, a french student in web developpement. I made this
                framework for my school project. I hope you will enjoy it ! 🤞
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
