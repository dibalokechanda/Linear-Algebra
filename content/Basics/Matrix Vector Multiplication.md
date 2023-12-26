---
title: Matix Vector Multiplicaton
draft: false
date: 2023-12-23
---

Consider a matrix $\mathbf{A} \in \mathbb{R}^{m\times n}$ and a vector $\mathbf{x} \in \mathbb{R}^{n}$. 

 $$
\mathbf{A}=\left[\begin{array}{cccc}
\mid & \mid & & \mid \\
\mathbf{a_1} & \mathbf{a_2} & \ldots & \mathbf{a_n} \\
\mid & \mid & & \mid
\end{array}\right]
$$
  
where, $\mathbf{a_1},\mathbf{a_2},\ldots,\mathbf{a_n}$ are columns of matrix $\mathbf{A}$. 

$$

\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}
$$


There are several ways we can express the Matrix vector multiplication. 

A way to express it is scaling the columns of $\mathbf{A}$ with the elements of vector $\mathbf{x}$. 



$$
\begin{align*}
\mathbf{A}\mathbf{x} & = \left[\begin{array}{cccc}
\mid & \mid & & \mid \\
\mathbf{a_1} & \mathbf{a_2} & \ldots & \mathbf{a_n} \\
\mid & \mid & & \mid
\end{array}\right] \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix} \\ \\&= x_1 \mathbf{a_1}+x_2\mathbf{a_2}+ \ldots +x_n\mathbf{a_n}
\end{align*}
$$


This can be written in a much more compact form as follows:



$$
\mathbf{A}\mathbf{x}= x_1 \mathbf{a_1}+x_2\mathbf{a_2}+ \ldots +x_n\mathbf{a_n}= \sum_{i=1}^{n}x_{1} \mathbf{a_1}
$$

##  The Functional Transformation perspective of Matrix-Vector Multiplication

We can interpret the matrix-vector multiplication through the lens of functions.

Consider a function $f:\mathbb{R}^{n} \rightarrow \mathbb{R}^m$ and the matrix-vector multiplication can be thought of as the following transformation:

$$
f(\mathbf{x})=\mathbf{A} \mathbf{x}
$$

To put it into words, we are plugging in a vector $\mathbf{x} \in \mathbb{R}^{n}$ and applying a transformation defined by a matrix $\mathbf{A} \in \mathbb{R}^{m \times n}$. The result of the transformation is another vector in $\mathbb{R}^{m}$. 






