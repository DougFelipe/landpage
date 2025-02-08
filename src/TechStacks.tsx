import React from "react";

const techStacks = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" },
  { name: "Matplotlib", icon: "https://matplotlib.org/stable/_images/sphx_glr_logos2_003.png" },
  { name: "Plotly", icon: "https://getlogovector.com/wp-content/uploads/2020/09/plotly-logo-vector.png" },
  { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
  { name: "Shiny", icon: "https://shiny.rstudio.com/images/shiny.png" },
  { name: "LaTeX", icon: "https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg" },
  { name: "ggplot2", icon: "https://raw.githubusercontent.com/tidyverse/ggplot2/main/man/figures/logo.png" },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-gray-0">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Tecnologias Utilizadas
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <img
                src={stack.icon}
                alt={stack.name}
                className="w-16 h-16 mb-4 object-contain"
              />
              <span className="text-gray-700 font-semibold">{stack.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
