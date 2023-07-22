
var passwordStatsData = [
    {category: 'IaaS/PaaS', requirement: '1 character (any character)', count: 4},
    {category: 'IaaS/PaaS', requirement: '6 characters (any character)', count: 6},
    {category: 'IaaS/PaaS', requirement: '8 characters (any character)', count: 4},
    {category: 'IaaS/PaaS', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 2},
    {category: 'IaaS/PaaS', requirement: '7 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    {category: 'IaaS/PaaS', requirement: '8 characters (lowercase letters & uppercase letters & numbers)', count: 1},
    
    {category: 'BaaS', requirement: '1 character (any character)', count: 2},
    {category: 'BaaS', requirement: '4 characters (any character)', count: 2},
    {category: 'BaaS', requirement: '5 characters (any character)', count: 1},
    {category: 'BaaS', requirement: '6 characters (any character)', count: 3},
    {category: 'BaaS', requirement: '8 characters (letters & numbers)', count: 3},
    
    {category: 'Cloud Databases', requirement: '1 character (any character)', count: 2},
    {category: 'Cloud Databases', requirement: '6 characters (any character)', count: 1},
    {category: 'Cloud Databases', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    
    {category: 'Cloud Storage', requirement: '1 character (any character)', count: 4},
    {category: 'Cloud Storage', requirement: '5 characters (any character)', count: 1},
    {category: 'Cloud Storage', requirement: '6 characters (any character)', count: 8},
    {category: 'Cloud Storage', requirement: '8 characters (any character)', count: 3},
    {category: 'Cloud Storage', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    {category: 'Cloud Storage', requirement: '8 characters (lowercase letters & uppercase letters & numbers)', count: 2},
    
    {category: 'Other Cloud Platform Services', requirement: '1 character (any character)', count: 5},
    {category: 'Other Cloud Platform Services', requirement: '4 characters (any character)', count: 2},
    {category: 'Other Cloud Platform Services', requirement: '5 characters (any character)', count: 2},
    {category: 'Other Cloud Platform Services', requirement: '6 characters (any character)', count: 8},
    {category: 'Other Cloud Platform Services', requirement: '8 characters (any character)', count: 1},
    {category: 'Other Cloud Platform Services', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    {category: 'Other Cloud Platform Services', requirement: '8 characters (letters & numbers)', count: 1},
    {category: 'Other Cloud Platform Services', requirement: '8 characters (lowercase letters & uppercase letters & numbers)', count: 1},
    
    {category: 'Cloud Management & Monitoring', requirement: '1 character (any character)', count: 6},
    {category: 'Cloud Management & Monitoring', requirement: '4 characters (any character)', count: 2},
    {category: 'Cloud Management & Monitoring', requirement: '5 characters (any character)', count: 1},
    {category: 'Cloud Management & Monitoring', requirement: '6 characters (any character)', count: 11},
    {category: 'Cloud Management & Monitoring', requirement: '8 characters (any character)', count: 1},
    {category: 'Cloud Management & Monitoring', requirement: '6 characters (lowercase letters & uppercase letters & numbers)', count: 1},
    {category: 'Cloud Management & Monitoring', requirement: '8 characters (lowercase letters & uppercase letters & numbers)', count: 2},
    
    {category: 'Data Analytics', requirement: '5 characters (any character)', count: 2},
    {category: 'Data Analytics', requirement: '6 characters (any character)', count: 4},
    {category: 'Data Analytics', requirement: '7 characters (any character)', count: 1},
    {category: 'Data Analytics', requirement: '8 characters (any character)', count: 1},
    
    {category: 'Cloud Development Tools & Services', requirement: '1 character (any character)', count: 6},
    {category: 'Cloud Development Tools & Services', requirement: '4 characters (any character)', count: 1},
    {category: 'Cloud Development Tools & Services', requirement: '5 characters (any character)', count: 1},
    {category: 'Cloud Development Tools & Services', requirement: '6 characters (any character)', count: 5},
    {category: 'Cloud Development Tools & Services', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    {category: 'Cloud Development Tools & Services', requirement: '7 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    
    {category: 'Security', requirement: '1 character (any character)', count: 1},
    {category: 'Security', requirement: '6 characters (any character)', count: 4},
    {category: 'Security', requirement: '7 characters (any character)', count: 1},
    {category: 'Security', requirement: '8 characters (any character)', count: 2},
    {category: 'Security', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    {category: 'Security', requirement: '7 characters (lowercase letters & uppercase letters & numbers)', count: 1},
    
    {category: 'Authentication & Identity Management', requirement: '1 character (any character)', count: 1},
    {category: 'Authentication & Identity Management', requirement: '6 characters (any character)', count: 5},
    {category: 'Authentication & Identity Management', requirement: '8 characters (lowercase letters & uppercase letters & numbers)', count: 2},
    {category: 'Authentication & Identity Management', requirement: '8 characters (letters & numbers & special characters)', count: 1},
    
    {category: 'Web Content Caching', requirement: '4 characters (any character)', count: 1},
    {category: 'Web Content Caching', requirement: '8 characters (any character)', count: 1},
    {category: 'Web Content Caching', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    
    {category: 'Payment APIs', requirement: '1 character (any character)', count: 2},
    {category: 'Payment APIs', requirement: '8 characters (any character)', count: 1},
    {category: 'Payment APIs', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    {category: 'Payment APIs', requirement: '8 characters (letters & numbers)', count: 1},
    {category: 'Payment APIs', requirement: '8 characters (lowercase letters & uppercase letters & numbers)', count: 1},
    
    {category: 'Billing', requirement: '5 characters (any character)', count: 1},
    {category: 'Billing', requirement: '6 characters (any character)', count: 1},
    {category: 'Billing', requirement: '8 characters (any character)', count: 1},
    {category: 'Billing', requirement: '8 characters (letters & numbers)', count: 1},
    
    {category: 'Bitcoin', requirement: '1 character (any character)', count: 1},
    {category: 'Bitcoin', requirement: '6 characters (any character)', count: 2},
    {category: 'Bitcoin', requirement: '8 characters (lowercase letters & uppercase letters & numbers)', count: 1},
    
    {category: 'Website Analytics/Customer Engagement', requirement: '1 character (any character)', count: 0},
    {category: 'Website Analytics/Customer Engagement', requirement: '5 characters (any character)', count: 0},
    {category: 'Website Analytics/Customer Engagement', requirement: '8 characters (lowercase letters & uppercase letters & numbers)', count: 0},
    
    {category: 'API Management', requirement: '6 characters (any character)', count: 2},
    {category: 'API Management', requirement: '8 characters (lowercase letters & uppercase letters & numbers)', count: 1},
    {category: 'API Management', requirement: '9 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    
    {category: 'Other SaaS Services', requirement: '1 character (any character)', count: 5},
    {category: 'Other SaaS Services', requirement: '2 characters (any character)', count: 1},
    {category: 'Other SaaS Services', requirement: '3 characters (any character)', count: 1},
    {category: 'Other SaaS Services', requirement: '4 characters (any character)', count: 3},
    {category: 'Other SaaS Services', requirement: '5 characters (any character)', count: 3},
    {category: 'Other SaaS Services', requirement: '6 characters (any character)', count: 6},
    {category: 'Other SaaS Services', requirement: '7 characters (any character)', count: 1},
    {category: 'Other SaaS Services', requirement: '8 characters (any character)', count: 2},
    {category: 'Other SaaS Services', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 3},
    {category: 'Other SaaS Services', requirement: '6 characters (lowercase letters & uppercase letters & numbers)', count: 1},
    {category: 'Other SaaS Services', requirement: '8 characters (letters & numbers)', count: 1},
    
    {category: 'Social', requirement: '1 character (any character)', count: 2},
    {category: 'Social', requirement: '5 characters (any character)', count: 1},
    {category: 'Social', requirement: '6 characters (any character)', count: 2},
    {category: 'Social', requirement: '6 characters (letters & numbers or lowercase & uppercase letters)', count: 1},
    
    {category: 'YC Companies', requirement: '1 character (any character)', count: 10},
    {category: 'YC Companies', requirement: '4 characters (any character)', count: 1},
    {category: 'YC Companies', requirement: '5 characters (any character)', count: 1},
    {category: 'YC Companies', requirement: '6 characters (any character)', count: 13},
    {category: 'YC Companies', requirement: '8 characters (any character)', count: 1}
];

function DoLoadStatsData()
{
  var cloudServiceCategories = dc.pieChart("#cloud-service-categories");
  var passwordRequirements = dc.rowChart("#password-requirements");
  var cloudServiceCategoriesTable = dc.dataTable("#cloud-service-category-table");

  var passwordStats = crossfilter(passwordStatsData);

  var psByCategory  = passwordStats.dimension(function(d) {return d.category;});
  var psServiceCountsByCategory = psByCategory.group().reduceSum(function(d) {return +d.count;});

  var psByRequirement  = passwordStats.dimension(function(d) {return d.requirement;});
  var psServiceCountsByRequirement = psByRequirement.group().reduceSum(function(d) {return +d.count;});

  cloudServiceCategories.width(600).height(600)
      .dimension(psByCategory)
      .group(psServiceCountsByCategory)
      .colors(d3.scale.category20b())
      .renderTitle(true)
      .innerRadius(50);

  cloudServiceCategoriesTable
    .dimension(psByCategory)
    .group(function(d) {
          return d.category;
    })
    .size(200)
    .columns([
          function(d) { return d.category; },
          function(d) { return d.requirement; },
          function(d) { return d.count; }
      ])
    .sortBy(function(d) {
          return d.count;
      });

  passwordRequirements.width(800).height(500)
      .dimension(psByRequirement)
      .group(psServiceCountsByRequirement)
       .colors(d3.scale.category20())
      .renderTitle(true)
      .renderLabel(true)
      .elasticX(true);

  dc.renderAll();
  d3.selectAll("svg").selectAll("text").style("color", "red");
}

//NOTE:
//SCRIPTS EMBEDDED IN BLOG POSTS ARE LOADED BEFORE THE GLOBAL JS LIBS,
//SO YOU NEED TO DEFER YOUR POST CODE EXECUTION
ht_utils.CallAfter('dc',DoLoadStatsData);




