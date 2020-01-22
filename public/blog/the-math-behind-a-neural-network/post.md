Introduction
------------

### Application example

<span>Let’s take an example to see how an ANN[^1] works.</span>

<center>
    <img src="/blog/the-math-behind-a-neural-network/table.png" width="400"/><br>
    <span><strong>Figure 1</strong>: Example of a set of persons with Obesity, Exercise, Smoking and Diabetic properties. The 1stands for true, the 0 for false.</span>
</center>

<br>
<span>We can observe that in this example, a person with diabetes is inevitably obese. What if we want a program which takes in parameter those 4 examples and can predict if a person is diabetic or not?</span>

<span>This problem can be modeled as an ANN with 3 input nodes which represent each property: the Obesity, Exercise and Smoking and a single output node which represents the Diabetic column.</span>

### Neural network operation

<span>Each property is represented as an input node so the network will operate as a function to say if the person is diabetic or not. 
The input nodes from a same layer are not link together but each node is linked to every node from the previous layer and from the next layer. 
Links between nodes are represented as weights and are unique to each liaison.
A unique value is held in each node which is calculated with previous nodes values and weights. The whole goal of the neural network is to adjust the weights to make the final predictions right.</span>

<span>To adjust the weights, we will proceed in different steps. First of all, the neural network will compute the output values named the prediction. 
Then, the network will use a function to calculate the error of accuracy and adjust the weights. This process will be repeated until the success rate is convenient.</span>

Forward propagation
-------------------

<span>As seen in the Introduction, each node holds a value contained between 0 and 1, and calculated with values of the previous neurons, weights and biases.</span>

<span>Let <img src="http://latex2png.com/pngs/ac5b70aa56b7d0d4df5b00c7bf6a9efa.png" width="23"/> be the sum of the bias and the dot product of weights $w_k$ and values of the previous neurons <img src="http://latex2png.com/pngs/ddf40073416ba9330dcdf3e7d97a79a6.png" width="38"/>.</span>

<center>
<img src="http://latex2png.com/pngs/bda67d9047c12611b097f198f46d6c46.png" width="200"/>
</center>

<span>In order to keep the values in the neurons between 0 and 1, we are going to use the sigmoid function which is defined on <img src="http://latex2png.com/pngs/9305c62515e571ca699201a0feab2f64.png" width="30"/>, noted :</span>

<center>
<img src="http://latex2png.com/pngs/9d70ad9d61701a06eab596ea3d35be8f.png" width="130"/>
</center>

<center>
    <img src="/blog/the-math-behind-a-neural-network/sigmoid.png" width="400"/><br>
    <span><strong>Figure 2</strong>: Graphical representation of the sigmoid function.</span>
</center>

<span>Thus,</span>

<center>
<img src="http://latex2png.com/pngs/23500446312298bcacd6bad52619c3c0.png" width="115" /><br>
<img src="http://latex2png.com/pngs/93718e53f77513db7143d6d33d9e2dfa.png" width="90" />
</center>

<span>This calculus can be visualised with matrix too</span>

<center>
<img src="http://latex2png.com/pngs/7644e6160a613fe7de59039d8b5a43ae.png" width="380" />
</center>

Back propagation
----------------

### Cost function

<span>Let’s take a simple example of a one-input-layer-one-output-layer-neural-network</span>

<center>
    <img src="/blog/the-math-behind-a-neural-network/simplenn.png" width="280"/><br>
    <span><strong>Figure 3</strong>: Diagram of the ANN to model the example of the cost function.</span>
</center>

<span>Once again,</span>

<center>
<img src="http://latex2png.com/pngs/37f6577bcf53a8444ee2e73dd7d10b0e.png" width="150" /><br>
<img src="http://latex2png.com/pngs/d958931d1fbe94b8df9a8d461f68b775.png" width="115" />
</center>

<span>The goal is now to adjust the weights to make the predictions more accurate. 
Let <img src="http://latex2png.com/pngs/57ad16112f31d6dc3e4c7604498b5ced.png" width="15" /> be the cost function/error function which is the square difference between the prediction and the actual output <img src="http://latex2png.com/pngs/e7a412156353c50e78053394f88083bb.png" width="7" />.</span>

<center>
<img src="http://latex2png.com/pngs/df19a6bcc8fce1abeb5b351b56e6eba2.png" width="200" />
</center>

<span>The smaller the cost function is, the more accurate the predictions are, mathematically the goal is to minimize the cost function.</span>

<center>
    <img src="/blog/the-math-behind-a-neural-network/cost.png" width="350"/><br>
    <span><strong>Figure 4</strong>: raphical representation of cost function from the previous neural network.</span>
</center>

### Gradient descent

<span>Now we will need to understand how sensitive the cost function is to small changes to <img src="http://latex2png.com/pngs/6cecbda655142215f16bd80ebb22dd41.png" width="20" /> because remember, the goal is to adjust weights. Thus, we will determine the partial derivative of <img src="http://latex2png.com/pngs/1d8919f761cd9c2a396da729d1533214.png" width="12" /> with respect to <img src="http://latex2png.com/pngs/02abdd49c12c4bca09c4651aaea3b2c9.png" width="10" /> using the chain rule.</span>

<center>
<img src="http://latex2png.com/pngs/eb6162564067c8eb92cf52e4c2c8d868.png" width="200" />
</center>

<span>Indeed,</span>

<center>
<img src="http://latex2png.com/pngs/6075a146d6d512d30e11f3848f274fc8.png" width="170" /><br>
<img src="http://latex2png.com/pngs/8d489137e57c1e3cd3967f234be71fc5.png" width="260" /><br>
<img src="http://latex2png.com/pngs/8356125ebfe06e0edc796b4b687eddda.png" width="300" />
</center>

<span>All together, it gives us</span>

<center>
<img src="http://latex2png.com/pngs/90f99449bc62627a8a4a34df19395302.png" width="300" />
</center>

<span>We will use this formula to calculate the adjustments to make to the weights multiple times until the predictions are accurate.</span>

Complex example
---------------

<center>
    <img src="/blog/the-math-behind-a-neural-network/complex.png" width="330"/><br>
    <span><strong>Figure 5</strong>: Diagram of a more complex ANN.</span>
</center>

<span>We will model this problem with matrix because it is easier</span>

### Forward propagation

<span>First of all we are going to create a matrix of weights and of bias</span>

<center>
<img src="http://latex2png.com/pngs/4c1ed6faa18d1276148c42a6659c394d.png" width="200" /><br>
<img src="http://latex2png.com/pngs/59de7776d0937941d942a29b171bf3e0.png" width="100" />
</center>

<span>Then, let’s calculate the predictions $a$. We consider that we have 2 set of input examples.</span>

<center>
<img src="http://latex2png.com/pngs/9805c7168091165a4caa53ef6a0a94c3.png" width="220" /><br>
<img src="http://latex2png.com/pngs/61d919ea16988a1dfd366d1075e46bf0.png" width="72" />
</center>

### Back propagation

<span>We will use the cost function derivative to calculate the adjustments to make to the weights</span>

<center>
<img src="http://latex2png.com/pngs/68852a70aeef8ebb71d44ece289762a8.png" width="160" /><br>
<img src="http://latex2png.com/pngs/cb929f6d9b1f1c37c5f07fb1e4cf34f8.png" width="260" />
</center>


<span>We can now add up the adjustments to the weights</span>

<center>
<img src="http://latex2png.com/pngs/e4ec1f7a273b3ff3e0c1cf3174b109a5.png" width="115" />
</center>

<span>And repeat the process until the success rate is \>95%</span>

[^1]: Artificial Neural Network
