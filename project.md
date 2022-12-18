---
layout: default
---


# Presentation of the democracy index

Let’s start by exploring the democracy index around the world, in order to do this we have decided to use the liberal democracy from ‘Our world in Data’. Based on the expert assessments and index by V-Dem. It combines information on voting rights, the
freedom and fairness of elections, freedoms of association and expression, civil liberties, and executive constraints. It ranges from 0 to 1 (most democratic), and gives data with a variable time span from 1789 until 2021.










# Mobility data

The covid pandemics impacted our mobility in an unprecedented way. In a vast majority of countries in the world, people almost stopped going outside and spent the majority of their time at home, because they were forced to, because of the fear of the virus, because of the closure of the shops or because of a combination of these factors. Of course, not all countries reacted in the same way to the pandemics. Some countries showed only a small decrease in the mobility of the inhabitants while some others completely stopped all social activity. Three countries were taken as examples in the graph below :

![plot_walking_evolution](images/walking_evolution_fr_me_viet.png)




France and Mexico show a sharp decrease in walking mobility, which reaches a very low level in France. On the contrary in Vietnam, the mobility decreases much more slowly, and, then stays at a higher level than in the two other countries.

The response of the authorities were however similar in these countries, with the suspension on non essential activities, interdiction of meetings etc… However, they have probably been applied in a more or less strict way, and the response of the population to these measures has probably been different, leading to very different evolutions of mobilities.

The mobility change can also be studied more precisely, taking into account the different categories of places that people visited. In this section we focus more precisely on the categories “retail and recreation”, “grocery and pharmacy”, “transit stations” and “workplaces” which are extracted from the Google mobility data. The drop in each of these categories can be evaluated by by taking the difference between the two “lowest” weeks (which corresponds to the peak of the covid pandemics in the concerned country) and the two “highest” weeks (before the pandemics). By doing this, the response to the pandemics from each country can be characterized by the drop in the visits to the different categories of places in the corresponding country.

The different countries can then be clusterized with k-means to group countries with a similar response to pandemics. The results of this clustering is detailed below : (à remplacer ensuite par une sorte de graphe interactif)


<details><summary>CLuster 1</summary>
<p>

#### Cluster 1

Countries : ['United Arab Emirates', 'Austria', 'Bosnia and Herzegovina', 'Bangladesh', 'Belgium', 'Chile', 'Costa Rica', 'Cape Verde', 'Dominican Republic', 'Egypt', 'France', 'United Kingdom', 'Ghana', 'Greece', 'Guatemala', 'Croatia', 'Ireland', 'Israel', 'Iraq', 'Italy', 'Kazakhstan', 'Lebanon', 'Luxembourg', 'Moldova', 'North Macedonia', 'Malta', 'Malaysia', 'Namibia', 'Poland', 'Portugal', 'Paraguay', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Slovenia', 'Slovakia', 'Turkey', 'Trinidad and Tobago', 'Ukraine', 'Uganda', 'Venezuela', 'Zimbabwe']

Democracy index distribution:



Centroid of the cluster :
retail_and_recreation -74.2 %
grocery_and_pharmacy -49.7 %
transit_stations -74.1 %
workplaces -62.7 %

Analysis : This cluster contains a high number of countries. It seems to be the most popular restrictions genotype over the world, with an important decrease in the visits to “retail and recreation” places and transit stations. This decrease was less important for vital shops (“grocery and pharmacy”). An important part of democratic countries (democracy index > 0.6) have followed this path. The other part is mostly in the cluster 4.
</p>
</details>


Cluster 1 :

Countries : ['United Arab Emirates', 'Austria', 'Bosnia and Herzegovina', 'Bangladesh', 'Belgium', 'Chile', 'Costa Rica', 'Cape Verde', 'Dominican Republic', 'Egypt', 'France', 'United Kingdom', 'Ghana', 'Greece', 'Guatemala', 'Croatia', 'Ireland', 'Israel', 'Iraq', 'Italy', 'Kazakhstan', 'Lebanon', 'Luxembourg', 'Moldova', 'North Macedonia', 'Malta', 'Malaysia', 'Namibia', 'Poland', 'Portugal', 'Paraguay', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Slovenia', 'Slovakia', 'Turkey', 'Trinidad and Tobago', 'Ukraine', 'Uganda', 'Venezuela', 'Zimbabwe']

Democracy index distribution:



Centroid of the cluster :
retail_and_recreation -74.2 %
grocery_and_pharmacy -49.7 %
transit_stations -74.1 %
workplaces -62.7 %

Analysis : This cluster contains a high number of countries. It seems to be the most popular restrictions genotype over the world, with an important decrease in the visits to “retail and recreation” places and transit stations. This decrease was less important for vital shops (“grocery and pharmacy”). An important part of democratic countries (democracy index > 0.6) have followed this path. The other part is mostly in the cluster 4.


Cluster 2 :

Countries : ['Burkina Faso', 'Bahrain', 'Benin', 'Belarus', 'Cameroon', 'Haiti', 'Japan', 'Cambodia', 'Latvia', 'Mali', 'Mozambique', 'Niger', 'Papua New Guinea', 'Sweden', 'Senegal', 'Togo', 'Thailand', 'Tanzania', 'Yemen', 'Zambia']

Democracy index distribution:


Centroid of the cluster :
retail_and -34.02142857142858 %
grocery_an -21.007142857142856 %
transit_st -40.910714285714285 %
workplaces -32.40357142857143 %

Analysis : Cluster with light restrictions. Mostly composed of undemocratic countries. This is quite surprising as we could expect undemocratic countries to impose the hardest restrictions while the contrary seems to happen.

Cluster 3 :

Countries : ['Argentina', 'Barbados', 'Bolivia', 'Botswana', 'Colombia', 'Ecuador', 'Spain', 'Georgia', 'Honduras', 'India', 'Jordan', 'Kyrgyzstan', 'Kuwait', 'Sri Lanka', 'Morocco', 'Mauritius', 'Nepal', 'New Zealand', 'Panama', 'Peru', 'Philippines', 'Pakistan', 'Serbia', 'El Salvador', 'South Africa']

Democracy index distribution:


Centroid of the cluster :
retail_and -85.15714285714286 %
grocery_an -69.57428571428572 %
transit_st -82.91428571428571 %
workplaces -78.62857142857143 %

Analysis : Hardest lockdown. What is remarkable here is that the countries with the hardest restrictions on people’s mobility are almost exclusively countries with a moderate democracy index. One probable explanation is that it was impossible on democratic countries to go as far in the restrictions without violating the rule of law. As undemocratic countries are often quite poor, it is probably impossible for them to impose such severe restrictions without durably impacting an already fragile economy.

Cluster 4 :

Countries : ['Afghanistan', 'Angola', 'Australia', 'Bulgaria', 'Brazil', 'Canada', 'Switzerland', 'Czechia', 'Germany', 'Denmark', 'Estonia', 'Finland', 'Fiji', 'Gabon', 'Hungary', 'Indonesia', 'Jamaica', 'Kenya', 'Laos', 'Lithuania', 'Libya', 'Mexico', 'Nigeria', 'Nicaragua', 'Netherlands', 'Norway', 'Oman', 'Qatar', 'Singapore', 'Tajikistan', 'United States', 'Uruguay', 'Vietnam']

Democracy index distribution:


Centroid of the cluster :
retail_and -57.41991341991342 %
grocery_an -34.430735930735935 %
transit_st -60.62121212121212 %
workplaces -51.4025974025974 %

Analysis : Cluster with moderate restrictions. A majority of the democratic countries is contained in this cluster. This is the more balanced cluster, with a moderate decrease in the visits to “retail and recreation” places and “transit stations”, and a light decrease in the visits to vital shops. The impact on work is also moderate.

Cluster 5 :

Countries : ['Hong Kong', 'South Korea', 'Mongolia', 'Taiwan']

Democracy index distribution:


Centroid of the cluster :
retail_and -12.696428571428577 %
grocery_an -4.464285714285715 %
transit_st -11.321428571428562 %
workplaces -16.94642857142857 %

Analysis : Cluster with almost no restrictions. It is difficult to interpret on the democracy index as there are very few countries in this cluster.



# Correlations democracy index x mobility drop

As shown in the previous clustering, the democracy index seems to have an impact on the response of a country to the pandemics. Let us investigate more on this possible link. Using the data coming from the Apple mobility report, one can plot the decrease in walking mobility with respect to the democracy index, each point representing a country. The drop in walking mobility is evaluated as the two highest weeks before lockdown vs. the two lowest weeks (i.e. the peak of the restrictions).


A decreasing trend can clearly be observed for countries with a democracy index lower to 0.7. Let us take into account only these countries, and study the relation between walking mobility change and democracy index using a linear regression.



The R-squared value being 0.385 , the democracy index explains an important part of the variance observed in the walking mobility change, for countries with a relatively low democracy index. The coefficients indicate that in the range of democracy index [0, 0.7], the walking mobility decreases by 3.5% each time the democracy index is increased by 0.1. There is thus a clear link between democracy index and the strength of the restrictions, but this link is much less obvious when the democratic countries are also considered. 

One possible explanation of this phenomena could be the association between the democracy index and the wealth of the countries. The more democratic, the richest a country is and the higher is its capacity to enforce constraining measures without too important impact on the poverty of its population.

[ADD PIB DEMOCRARY INDEX GRAPH]



Conclusion (à reformuler): the democracy index is not what drives the response to the pandemics, but the wealth of the country. Undemocratic country cannot inforce high restrictions without increasing poverty which could compromise their regime.
Very democratic countries are also the richests : they have all lattitude to impose the measures they want as they are rich enough. Maybe also better medical infrastructure which necessitate less restrictions










# Wiki dataset presentation


The objective of this section is to study the impact of the COVID-19 pandemic on the population's interests, taking into account both the democracy index of each country and the level of decline in mobility. To do this we had at our disposal the Coronawiki dataset which gives, for 64 subjects, the evolution of the number of daily visits for different versions of Wikipedia between 01 January 2018 and 31 July 2020. Here we will focus on only 12 countries which are Turkey, Serbia, Japan, Italy, South Korea, Catalonia, the Netherlands, Germany, Finland, Norway, Sweden and Denmark. These are the only versions of Wikipedia present in the dataset whose language can be directly associated with a single country. This was not the case for the English version of Wikipedia, for example, as English is spoken in many parts of the world.

We will start by plotting the evolution of the number of wikipedia searches for each of these countries, with the date of the start of the Mobility drastic stop for each of these countries, taken from the interventions csv.




The following figure shows the relative evolution of interest in each topic in the coronawiki dataset and in each country considered here. The relative evolution of interest for a given topic in a given country is defined as follows: 
= Icovid - IrefIref where Icovid is the average proportion of this topic among all wikipedia visits in this country during the covid period. Iref is the average proportion of this topic among all wikipedia visits in this country during same period but one year before (so in 2019)
On the vertical axis the matrix is sorted with the subject whose interest has globally decreased the most at the top and the subject whose interest has globally increased the most at the bottom. On the horizontal axis, countries are sorted according to their mobility shift, from highest on the left to lowest on the right. 
In the second image, only those topics that have a relative change in interest of more than 10% in absolute value (on average over all countries) are shown.

The subject in which interest decreased the most during the COVID was sport. 
This decline in interest in sport is almost uniform (approximately -20%) across the 12 countries considered, although they have different mobility shift values. Even in countries where mobility has decreased less, such as Finland or Sweden, and therefore where the practice of sport has probably remained more accessible than elsewhere, interest in sport has decreased significantly. There was also a decline in interest in other subjects such as architecture, the visual arts and transportation, which can be explained by the almost complete cessation of tourism and reduction of travel. Again, these decreased values do not seem to be correlated with either the democracy index or the mobility shift.

Among the 10 subjects that have gained the most interest overall among the population are video games, films, books, entertainment and internet culture. This can be explained quite easily by the fact that people have been looking for new occupations to occupy the large amount of free time spent at home. We also find 'biology' and 'medicine and health' which are probably linked to the public's concern and need for information about COVID-19. Here it seems interesting to look at the impact of the mobility shift on the relative evolution of interest in these topics. In the next figure each point represents a version of wikipedia, with the mobility shift in the associated country on the x-axis and the gain in interest in films and video games on the y-axis (weighted average of the two subjects). There appears to be a linear relationship between the two variables, the coefficients of which are made explicit in the graph. The slope of the line is about 0.6, which means that a 10-point decrease in mobility leads to a 6-point increase in interest in video games and films.

From an overall perspective, we can conclude that the populations of the countries studied appear to have complied with the containment and health measures imposed by governments. Indeed, people did not seek to take an interest in what was forbidden and inaccessible but rather in the only occupations that remained possible.


