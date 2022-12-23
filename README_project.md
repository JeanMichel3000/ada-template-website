# TITLE

## Data story

Please, visit our website using the following [link](https://jeanmichel3000.github.io/ada-template-website/project):

## Abstract

In our study, we investigated variations in citizens' interest in different topics when they were subjected to lockdown during the first epidemic wave of Covid-19. More specifically, we wanted to compare the effect of the different levels of restrictions that were put in place. We first studied the intensity of the mobility restrictions, assessing the impact of an important factor: the level of democracy in the different countries. It appeared that to some extent, the less democratic the countries are, the less mobility of citizens has been reduced. This is no longer the case once a certain level of democracy is sufficiently high. 
Secondly, the study of pageviews trends on Wikipedia showed that mobility restrictions did not lead people to learn about what was forbidden to them but rather what was still allowed. For example, the greater the restrictions, the greater the proportion of page views for the topic "Films and series". 

## Research questions

-*Did the most democratic countries implement the most moderate measures?*  
-*Did citizens exposed to stricter measures think more about what they were not allowed to do?*

## Methods

### Additional dataset : the Liberal Democracy index

For the versions associated with a specific country, we are going to use the Liberal democracy index, obtained from Our World in Data
(https://ourworldindata.org/democracy).  
Its calculation is based on the expert assessments and index by V-Dem. It combines information on voting rights, the freedom andfairness of elections, freedoms of association and expression, civil liberties, and executive constraints. It ranges from 0 to 1 (most democratic).

### Data visualizations

We used several types of visualizations in our data story. In addition to classical scatter and linear plots, we used the Geopandas library to display geographical plots. In addition, we used matrix visualization, to give to the viewer a comprehensive idea of the results.

### Linear regression

We used the Ordinary Least Squares method from the Statsmodel package to perform several linear regressions. In every case we considered the regression coefficient R², the values of the coefficient and the p-values of the statistical test questioning the likelihood of the nullity of these coefficients.  

### Clustering

Using the k-means implementation of Scikit-Learn, we performed a clustering of the different countries based on the mobility shift observed in different types of places (from the Google mobility dataset). The appropriate number of clusters was determined using the elbow method.

## Data minors contributions 

**Bechara:** Handling of the Democracy Index and visual presentations of the relevant values. Global presentation of the variation. Writing the corresponding data story sections.  
**Valentin:** Joint analysis of the mobility decrease and the democracy index, by analysing correlations and performing clustering. Writing the corresponding data story sections.  
**Louis:** Joint analysis of the mobility decrease and the shift in interest regarding the different topics. Comprehensive analysis for all the topics and regression analysis for specific topics. Writing the corresponding data story sections.  
**Mériadec:** Analysis of the link between mobility decrease in specific places and specif topic attention shifts: led to no satisfying results. Writing introduction, conlcusion and readme file.
