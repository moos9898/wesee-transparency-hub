
update public.companies c set
  slug = m.new_slug, name = m.new_name, ticker = m.new_ticker,
  ceo = m.new_ceo, website = 'https://example.com',
  description = m.new_name || ' is a fictional demo company used to preview the WeSee methodology. It does not represent any real business.'
from (values
  ('apple','meridian-devices','Meridian Devices','MRDV','A. Calloway'),
  ('amazon','halcyon-commerce','Halcyon Commerce','HLCM','R. Vance'),
  ('alphabet','northwind-internet','Northwind Internet Group','NWIG','P. Osei'),
  ('microsoft','arclight-software','Arclight Software','ARCL','J. Lindqvist'),
  ('meta','vantage-social','Vantage Social','VNTG','S. Adeyemi'),
  ('nvidia','quartzline-semiconductors','Quartzline Semiconductors','QRTZ','D. Marchetti'),
  ('tesla','emberline-motors','Emberline Motors','EMBR','K. Sandoval'),
  ('ford','ironvale-motor','Ironvale Motor Works','IRVM','T. Brennan'),
  ('gm','crestmark-automotive','Crestmark Automotive','CRMK','L. Whitfield'),
  ('walmart','baywood-retail','Baywood Retail','BYWD','M. Kaur'),
  ('costco','stonebridge-clubs','Stonebridge Wholesale Clubs','STBR','E. Novak'),
  ('target','lyndonfield-stores','Lyndonfield Stores','LYND','C. Duarte'),
  ('homedepot','timberline-supply','Timberline Home Supply','TMBL','G. Halloran'),
  ('starbucks','cedarcup-cafes','Cedarcup Cafes','CDCP','N. Ferreira'),
  ('jnj','helios-medical','Helios Medical Group','HLMD','V. Rasmussen'),
  ('pfizer','solstice-pharma','Solstice Pharmaceuticals','SLPH','A. Bergstrom'),
  ('jpmorgan','keystone-financial','Keystone Financial Group','KYST','H. Okafor'),
  ('berkshire','granitepeak-holdings','Granite Peak Holdings','GPKH','W. Ashcroft'),
  ('boeing','skyforge-aerospace','Skyforge Aerospace','SKFG','R. Delacroix'),
  ('lockheed','sentinel-defense','Sentinel Defense Systems','SNTL','B. Ivanova'),
  ('exxonmobil','pinnacle-energy','Pinnacle Energy Corp','PNCE','F. Aldridge'),
  ('chevron','redrock-petroleum','Redrock Petroleum','RDRK','O. Sandberg'),
  ('coca-cola','springtide-beverages','Springtide Beverages','SPTD','I. Moreau'),
  ('procter-gamble','clearbrook-consumer','Clearbrook Consumer Goods','CLBK','Y. Tanaka'),
  ('disney','lumenarc-media','Lumenarc Media','LMNC','Z. Barrientos')
) as m(old_slug,new_slug,new_name,new_ticker,new_ceo)
where c.slug = m.old_slug;
