CREATE TABLE IF NOT EXISTS versions (
	id bigint(19) NOT NULL AUTO_INCREMENT,
	name varchar(250) NOT NULL,
  value text NOT NULL,
  level int(11) NOT NULL DEFAULT '0',
  enabled tinyint(1) NOT NULL DEFAULT '1',
  attribute1 varchar(250) DEFAULT NULL,
  operator1 varchar(100),
  value1 text,
  attribute2 varchar(250) DEFAULT NULL,
  operator2 varchar(100),
  value2 text,
  valid_from timestamp NULL DEFAULT NULL,
  valid_to timestamp NULL DEFAULT NULL,
  modified_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  comment text,
	PRIMARY KEY (id),
	UNIQUE KEY `uk_name_level_enabled` (`name`,`level`,`enabled`)
);